import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import CoPresentIcon from '@mui/icons-material/CoPresent';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <div>
            <FooterInfoTop>
              <img alt="Logo" src="/images/logo.png" />
              <div>VanCity Property</div>
            </FooterInfoTop>
            <FooterInfoBottom>
              <InfoBottomFisrt>
                <span>CPSC 455 2023S</span>
              </InfoBottomFisrt>
              <InfoBottomSecond>
                <span>TheKimPlusTwo</span>
              </InfoBottomSecond>
            </FooterInfoBottom>
            <Rights>
              <span>UBC</span>
              <div />
            </Rights>
          </div>
          <FooterRight>
            <FooterIcon>
              <a href="https://github.com/czhaoca/TheKimsPlusTwo">
                <GitHubIcon style={{ fontSize: '40px' }} />
              </a>
            </FooterIcon>
            <FooterIcon>
              <a href="https://blogs.ubc.ca/cpsc4552023s">
                <CoPresentIcon style={{ fontSize: '40px' }} />
              </a>
            </FooterIcon>
          </FooterRight>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background: #ffffff;
  color: #bdbdbd;
  border: 1px solid #ececec;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  background: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 2rem;
  color: #bdbdbd;
`;

const FooterInfoTop = styled.div`
  display: flex;
  align-items: end;
  margin: 0 0 12px 0;

  img {
    width: 86px;
    height: 20px;
  }

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

const Rights = styled.div`
  margin: 12px 0 0 0;
  font-size: 12px;
`;

const InfoBottomFisrt = styled.div`
  display: flex;
  margin: 0 0 4px 0;

  div {
    margin: 0 0 0 6px;
    padding: 0 0 0 6px;
    border-left: 1px solid #bdbdbd;
  }
`;

const InfoBottomSecond = styled.div`
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
