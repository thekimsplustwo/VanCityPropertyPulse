import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FooterSocial() {
  return (
    <SocialContainer>
      <FollowUs> Follow us!</FollowUs>
      <FooterIcon>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FacebookIcon style={{ color: '#3b5998', fontSize: '40px' }} />
        </a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <InstagramIcon style={{ color: '#C13584', fontSize: '40px' }} />
        </a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <TwitterIcon style={{ color: '#1DA1F2', fontSize: '40px' }} />
        </a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
          <RedditIcon style={{ color: '#FF4500', fontSize: '40px' }} />
        </a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <YouTubeIcon style={{ color: '#FF0000', fontSize: '40px' }} />
        </a>
      </FooterIcon>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px 32px 0;
  @media (max-width: 700px) {
    display: none;
  }
`;

const FooterIcon = styled.div`
  fontsize: '40px';
`;

const FollowUs = styled.span`
  margin-left: 0.6rem;
  font-style: italic;
`;

export default FooterSocial;
