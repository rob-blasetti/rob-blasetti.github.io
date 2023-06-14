import React, { useEffect } from 'react';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 250,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const VideoCarousel = ({ videoIds = [] }) => {
  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = 9 / 16;
      const carousels = document.querySelectorAll('.carousel-container .carousel-embed-container');
      if (carousels) {
        carousels.forEach(carousel => {
          const width = carousel.clientWidth;
          carousel.style.height = `${width * aspectRatio}px`;
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videoIds.map(videoId => (
          <div key={videoId} className="carousel-video-container">
            <div className="carousel-embed-container">
              <iframe
                className="carousel-iframe"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
