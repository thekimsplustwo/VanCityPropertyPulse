import { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { setPage } from '../../redux/search/reducer';
import PropertyNotFound from './PropertyNotFound';

function PropertyGrid({
  properties,
  showCompareButton,
  showHeartIcon,
  searchParams,
  setSearchClicked,
}) {
  const location = useLocation();
  const propertiesPerPage = 39;
  const totalPages = 20;
  const pageGroupSize = 5;

  const [currentPage, setCurrentPage] = useState(searchParams?.page || 1);
  const [selectedProperties, setSelectedProperties] = useState([]);

  useEffect(() => {
    setCurrentPage(searchParams?.page || 1);
  });

  const dispatch = useDispatch();

  const handlePagination = (event, page) => {
    if (location.pathname !== '/likes') {
      setCurrentPage(page);
      dispatch(setPage(page));
      setSearchClicked(true);
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handlePrevGroup = () => {
    const prevPage =
      currentPage - pageGroupSize >= 1 ? currentPage - pageGroupSize : 1;
    setCurrentPage(prevPage);
    dispatch(setPage(prevPage));
    setSearchClicked(true);
  };

  const handleNextGroup = () => {
    const nextPage =
      currentPage + pageGroupSize <= totalPages
        ? currentPage + pageGroupSize
        : totalPages;
    setCurrentPage(nextPage);
    dispatch(setPage(nextPage));
    setSearchClicked(true);
  };

  const handlePropertySelect = property => {
    setSelectedProperties(prevSelected => [...prevSelected, property]);
  };

  const handlePropertyDeselect = property => {
    setSelectedProperties(prevSelected =>
      prevSelected.filter(prop => prop.zpid !== property.zpid)
    );
  };

  const handleAddToCompare = property => {
    if (selectedProperties.some(prop => prop.zpid === property.zpid)) {
      setSelectedProperties(prevSelected =>
        prevSelected.filter(prop => prop.zpid !== property.zpid)
      );
    } else {
      setSelectedProperties(prevSelected => [...prevSelected, property]);
    }
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
          onClick={event => handlePagination(event, pageNumber)}
        >
          {pageNumber}
        </Button>
      );
    });
  };

  return (
    <Wrapper>
      <Section>
        {properties && properties?.length > 0 ? (
          <CardWrapper>
            {properties.map(property => (
              <PropertyCard
                key={property.zpid}
                property={property}
                showCompareButton={showCompareButton}
                showHeartIcon={showHeartIcon}
                isSelected={selectedProperties.some(
                  prop => prop.zpid === property.zpid
                )}
                onSelectProperty={handlePropertySelect}
                onDeselectProperty={handlePropertyDeselect}
                onAddToCompare={handleAddToCompare}
              />
            ))}
          </CardWrapper>
        ) : (
          <PropertyNotFound />
        )}
      </Section>

      <Pagination>
        <NavButton onClick={handlePrevGroup} disabled={currentPage === 1}>
          Prev
        </NavButton>
        {renderPageNumbers()}
        <NavButton
          onClick={handleNextGroup}
          disabled={
            currentPage >= totalPages || properties.length < propertiesPerPage
          }
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
  font-weight: bold;
  padding: 0.5em 1em;
  margin: 0 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => (props.disabled ? 'gray' : 'black')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
