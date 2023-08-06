import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import { setPage } from '../../redux/search/reducer';

function PropertyGrid({
  properties,
  showCompareButton,
  showHeartIcon,
  searchParams,
  setSearchClicked,
}) {
  const [currentPage, setCurrentPage] = useState(searchParams.page);
  useEffect(() => {
    setCurrentPage(searchParams.page);
  });
  const [selectedProperties, setSelectedProperties] = useState([]);

  const dispatch = useDispatch();

  const handlePrevGroup = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    dispatch(setPage(prevPage));
    setSearchClicked(true);
  };

  const handleNextGroup = () => {
    const nextPage = currentPage + 1;
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

  return (
    <Wrapper>
      <Section>
        <CardWrapper>
          {properties &&
            properties.map(property => (
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
      </Section>
      <Pagination>
        <NavButton onClick={handlePrevGroup} disabled={currentPage === 1}>
          Prev
        </NavButton>
        <NavButton onClick={handleNextGroup} disabled={properties.length < 41}>
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

const NavButton = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => (props.disabled ? 'gray' : 'black')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
