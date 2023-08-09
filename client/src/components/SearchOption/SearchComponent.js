import styled from 'styled-components';
import SearchInput from './SearchInput';
import searchImage from '../../assets/images/searchComponent.jpg';
import SearchOptions from './SearchOptions';

export default function SearchComponent() {
  return (
    <SearchContainer>
      <Title>Looking for a place to live?</Title>
      <SearchInput />
      <SearchOptions />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background: url(${searchImage}) no-repeat center center;
  background-size: cover;
  height: 500px;
  padding: 0 30px;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
