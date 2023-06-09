import styled from 'styled-components';

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
              <div />
            </FooterIcon>
            <FooterIcon>
              <div />
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
`;

const FooterWrapper = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  background: #ffffff;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 20px;
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
  display: flex;
  align-items: center;
`;

const FooterIcon = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    margin: 0 10px 0 0;
    color: black;
    border: 1px solid transparent;
    border-radius: 20px;
    background: #bdbdbd;
  }
`;

export default Footer;
