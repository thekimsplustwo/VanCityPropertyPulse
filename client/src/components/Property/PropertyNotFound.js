import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { themeColorGrey } from '../../styles/theme';

function PropertyNotFound() {
  const location = useLocation();
  return (
    <PropertyEmpty location={location.pathname}>
      PROPERTY NOT FOUND
    </PropertyEmpty>
  );
}

export default PropertyNotFound;

const PropertyEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => (props.location === '/home' ? '30vh' : '100vh')};
  align-items: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: ${themeColorGrey};
`;
