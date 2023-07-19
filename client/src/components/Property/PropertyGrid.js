import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import { setPage } from '../../redux/search/reducer';

function PropertyGrid({ properties, showCompareButton, showHeartIcon }) {
  const numOfProperties = properties.length;
  const propertiesPerPage = 9;
  const totalPages = Math.ceil(numOfProperties / propertiesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageGroupSize = 5;

  const dispatch = useDispatch();

  const handlePagination = page => {
    setCurrentPage(page);
    dispatch(setPage(page));
  };

  const handlePrevGroup = () => {
    const prevPage =
      currentPage - pageGroupSize >= 1 ? currentPage - pageGroupSize : 1;
    setCurrentPage(prevPage);
    dispatch(setPage(prevPage));
  };

  const handleNextGroup = () => {
    const nextPage =
      currentPage + pageGroupSize <= totalPages
        ? currentPage + pageGroupSize
        : totalPages;
    setCurrentPage(nextPage);
    dispatch(setPage(nextPage));
  };

  const renderPageNumbers = () => {
    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <Button
          key={pageNumber}
          active={currentPage === pageNumber}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </Button>
      );
    });
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  return (
    <Wrapper>
      <Section>
        <CardWrapper>
          {currentProperties &&
            currentProperties.map(property => (
              <PropertyCard
                key={property.zpid}
                property={property}
                showCompareButton={showCompareButton}
                showHeartIcon={showHeartIcon}
              />
            ))}
        </CardWrapper>
      </Section>
      <Pagination>
        <NavButton onClick={handlePrevGroup} disabled={currentPage === 1}>
          Prev
        </NavButton>
        {renderPageNumbers()}
        <NavButton
          onClick={handleNextGroup}
          disabled={currentPage >= totalPages}
        >
          Next
        </NavButton>
      </Pagination>
    </Wrapper>
  );
}

export default PropertyGrid;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 40px;
`;

const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em;
  border: none;
  background-color: ${props => (props.active ? 'lightgray' : 'transparent')};
  cursor: pointer;
`;

const NavButton = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => (props.disabled ? 'gray' : 'black')};
`;
