import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatWindow from '../ChatBot/ChatWindow';

function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(prevIsChatOpen => !prevIsChatOpen);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <div>
            <FooterInfoTop>VanCity Property Pulse</FooterInfoTop>
            <FooterInfoBottom>
              <InfoBottom>
                <p>by TheKimsPlusTwo</p>
              </InfoBottom>
              <InfoBottom>
                <p>UBC CPSC455</p>
              </InfoBottom>
            </FooterInfoBottom>
          </div>
          <FooterRight>
            <FooterIcon>
              <a
                href="https://github.com/czhaoca/TheKimsPlusTwo"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={{ fontSize: '40px' }} />
              </a>
            </FooterIcon>
            <FooterIcon>
              <a
                href="https://blogs.ubc.ca/cpsc4552023s"
                target="_blank"
                rel="noreferrer"
              >
                <CoPresentIcon style={{ fontSize: '40px' }} />
              </a>
            </FooterIcon>
            <FooterIcon>
              <SmartToyIcon
                onClick={handleChatButtonClick}
                style={{ fontSize: '40px' }}
              />
              {isChatOpen && <ChatWindow />}
            </FooterIcon>
          </FooterRight>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  left: 0px;
  bottom: 0px;
  width: 100vw;
  background: #ffffff;
  color: #bdbdbd;
  border: 1px solid #ececec;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  background: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 2em;
  color: #bdbdbd;
`;

const FooterInfoTop = styled.div`
  display: flex;
  align-items: end;
  margin: 0 0 12px 0;

  div {
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 0 16px;
    padding: 0 0 0 12px;
    border-left: 1px solid #bdbdbd;
  }
`;

const FooterInfoBottom = styled.div`
  font-size: 12px;
`;

const InfoBottom = styled.div`
  display: flex;
  margin: 0 0 4px 0;

  div {
    margin: 0 0 0 6px;
    padding: 0 0 0 6px;
    border-left: 1px solid #bdbdbd;
  }
`;

const FooterRight = styled.div`
  width: 12vw;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  svg {
    margin-left: 1rem;
    &:hover {
      cursor: pointer;
      color: #373737;
    }
`;

const FooterIcon = styled.div`
  display: flex;
`;

export default Footer;
