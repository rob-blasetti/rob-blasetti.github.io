import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar, VideoCarousel, SocialLinks, Hero, Courses, BlogPage, BlogDetail, NewsletterSignup, AboutUs, ContactUs, Consultancy, BlogHighlights, ScrollToAnchor } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { YOUTUBE_API_URL, CHANNEL_ID, API_KEY, SOCIAL_LINKS } from './constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './colours.less';
import './App.less';

let cache = {};

const App = () => {
  // default video IDs
  const [videoIds, setVideoIds] = useState(['LFrNh8WoPXE', 'jRpbm2QBNvw', 'Ycinl1b89eQ']);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        let response;
        if (cache[YOUTUBE_API_URL]) {
          response = cache[YOUTUBE_API_URL];
        } else {
          response = await axios.get(YOUTUBE_API_URL, {
            params: {
              part: 'snippet',
              channelId: CHANNEL_ID,
              maxResults: 5,
              order: 'date',
              type: 'video',
              key: API_KEY
            }
          });
          cache[YOUTUBE_API_URL] = response;
        }

        const ids = response.data.items.map(item => item.id.videoId);
        if (ids.length > 0) {
          setVideoIds(ids);
        }
      } catch (err) {
        // If an error occurs, just keep the default videos
      } finally {
        setIsLoading(false);
      }
    };

    getVideos();
  }, []);

  return (
    <Router>
      <ScrollToAnchor />
      <NavBar />
      <Routes>
        <Route exact path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={
          <div className="App" id="home">
            <Hero />
            <header className="App-header">
              <div id="about-us" className="section about-us-section">
                <AboutUs />
              </div>
              <div id="consultancy" className="section consultancy-section">
                <Consultancy />
              </div>
              <div id="videos" className="section videos-section">
              <h1>Liquid Gold Media</h1>
                <p>News, Crypto Explainers, Opinions. Have a look at our curated playlists, designed to cater for all levels of experience.</p>
                  {isLoading ? <p>Loading...</p> : <VideoCarousel videoIds={videoIds} />}
                <Container className="text-center mt-4">
                <a
                  className="submit-button"
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our YouTube Channel
                </a>
                </Container>
              </div>
              <div id="courses" className="section courses-section">
                <Courses />
              </div>
              <div id="blog-highlights" className="section blog-highlights-section">
                <BlogHighlights />
              </div>
              <div id="newsletter" className="section newsletter-signup-section">
                <NewsletterSignup />
              </div>
              <div id="contact-us" className="section contact-us-section">
                <ContactUs />
              </div>
              <div id="social-links" className="social-links-section">
                <SocialLinks />
              </div>
            </header>
          </div>
        } />
      </Routes>
    </Router>
    );
  };

export default App;
