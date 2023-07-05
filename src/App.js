import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar, VideoCarousel, SocialLinks, Hero, Courses, AboutUs, ContactUs } from './components';
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
      <div className="App" id="home">
        <NavBar />
        <Hero />
        <header className="App-header">
          <Container className="section">
            <p className="mb-4">Welcome to Liquid Gold, your source for the latest news on cryptocurrencies. We're committed to providing you with the most relevant and up-to-date information in the crypto world.</p>
          </Container>
          <div id="videos" className="section videos-section">
            {isLoading ? <p>Loading...</p> : <VideoCarousel videoIds={videoIds} />}
            <Container className="text-center mt-4">
              <a
                className="youtube-link"
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit our YouTube Channel
              </a>
            </Container>
          </div>
          <div id="social-links" className="section social-links-section">
            <SocialLinks />
          </div>
          <div id="courses" className="section courses-section">
            <Courses />
          </div>
          <div id="about-us" className="section about-us-section">
            <AboutUs />
          </div>
          <div id="contact-us" className="section contact-us-section">
            <ContactUs />
          </div>
        </header>
      </div>
    );
  };

export default App;
