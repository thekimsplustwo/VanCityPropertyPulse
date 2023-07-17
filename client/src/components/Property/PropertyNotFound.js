import styled from 'styled-components';

function PropertyNotFound() {
  return <PropertyEmpty>PROPERTY NOT FOUND</PropertyEmpty>;
}

export default PropertyNotFound;

const PropertyEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.3em;
`;
