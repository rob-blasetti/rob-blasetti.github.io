import { Card } from 'react-bootstrap';
import { faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '../constants';

const SocialLinks = () => {
  return (
    <Card className="social-links-card text-center mt-4">
      <Card.Header className="social-links-header">
        Follow us on social media!
      </Card.Header>
      <Card.Body>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" /> Instagram
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" /> Twitter
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" className="social-icon" /> TikTok
          </a>
        </div>
        <div className="social-link-tile">
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icon" /> YouTube
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SocialLinks;
