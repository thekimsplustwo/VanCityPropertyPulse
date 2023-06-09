import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function PropertyHeader(props) {
  const { pid } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>
          <h1>${pid}</h1>
        </HeaderTitle>
      </HeaderWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 20px 0;
`;

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  opacity: 0.3;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  border-radius: 10px;
  padding: 3px 8px;
`;

const MenuOpt = styled.div`
  padding: 0 0.3rem;
  font-size: 15px;
  font-weight: 500px;
`;
const ContentWrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

export default PropertyHeader;
