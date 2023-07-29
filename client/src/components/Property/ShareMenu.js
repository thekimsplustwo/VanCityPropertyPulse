import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Reddit as RedditIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import ReplyIcon from '@mui/icons-material/Reply';
import { SNS_URL } from '../../config';

function ShareMenu({ url, title }) {
  const testUrl = 'https://www.adidas.ca/en';
  const finalUrl = SNS_URL === 'on' ? testUrl : url;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    if (process.env.REACT_APP_TEST_URL === 'on') {
      console.log('URL:', finalUrl);
    } else {
      navigator.clipboard.writeText(finalUrl);
    }
    alert('URL copied to clipboard');
    handleClose();
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        finalUrl
      )}&quote=${encodeURIComponent(title)}`,
      'facebook-share-dialog',
      'width=800,height=600'
    );
    handleClose();
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(finalUrl)}`,
      'twitter-share-dialog',
      'width=800,height=600'
    );
    handleClose();
  };

  const handleRedditShare = () => {
    window.open(
      `http://www.reddit.com/submit?url=${encodeURIComponent(
        finalUrl
      )}&title=${encodeURIComponent(title)}`,
      'reddit-share-dialog',
      'width=800,height=600'
    );
  };

  const handleWhatsAppShare = () => {
    const msg = `Check this out: ${title}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        msg
      )}: ${encodeURIComponent(finalUrl)}`,
      'whatsapp-share-dialog',
      'width=800,height=600'
    );
  };

  const handleKeyDown = (event, clickHandler) => {
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <div>
      {!open && (
        <ShareButton
          onClick={handleOpen}
          onKeyDown={event => handleKeyDown(event, handleOpen)}
          tabIndex={0}
          role="button"
        >
          <ReplyIcon />
          <MenuOpt>Share</MenuOpt>
        </ShareButton>
      )}
      {open && (
        <ShareOptionsContainer>
          <ShareOption
            onClick={handleCopy}
            onKeyDown={event => handleKeyDown(event, handleCopy)}
            tabIndex={0}
            role="button"
          >
            <MenuOpt>URL</MenuOpt>
          </ShareOption>
          <ShareOption
            onClick={handleFacebookShare}
            onKeyDown={event => handleKeyDown(event, handleFacebookShare)}
            tabIndex={0}
            role="button"
          >
            <FacebookIcon style={{ color: '#3b5998', fontSize: '30px' }} />
          </ShareOption>
          <ShareOption
            onClick={handleTwitterShare}
            onKeyDown={event => handleKeyDown(event, handleTwitterShare)}
            tabIndex={0}
            role="button"
          >
            <TwitterIcon style={{ color: '#1DA1F2', fontSize: '30px' }} />
          </ShareOption>
          <ShareOption
            onClick={handleRedditShare}
            onKeyDown={event => handleKeyDown(event, handleRedditShare)}
            tabIndex={0}
            role="button"
          >
            <RedditIcon style={{ color: '#FF4500', fontSize: '30px' }} />
          </ShareOption>
          <ShareOption
            onClick={handleWhatsAppShare}
            onKeyDown={event => handleKeyDown(event, handleWhatsAppShare)}
            tabIndex={0}
            role="button"
          >
            <WhatsAppIcon style={{ color: '#25D366', fontSize: '30px' }} />
          </ShareOption>
        </ShareOptionsContainer>
      )}
    </div>
  );
}

const MenuOpt = styled.div`
  padding: 0 0.3rem;
  font-size: 15px;
  font-weight: 5rem;
`;

const ShareButton = styled.div`
  display: flex;
  align-items: center;
`;

const ShareOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShareOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export default ShareMenu;
