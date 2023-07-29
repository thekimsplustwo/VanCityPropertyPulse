import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PropertyImage from './PropertyImage';
import { convertPriceToCAD } from '../../utils/utils';
import { baseInfoRowStyles } from '../../styles/theme';
import { addLikesAsync, deleteLikesAsync } from '../../redux/likes/thunks';

function PropertyCard({ property, showCompareButton, showHeartIcon }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currZpid = property.zpid;

  const likes = useSelector(state => state.likes.list);
  const liked = likes && likes.some(like => like.zpid === currZpid, 10);

  const navigateToPropertyPage = zpid => {
    navigate(`/properties/${zpid}`, {
      state: { zpid },
    });
  };

  const handleCompare = event => {
    event.stopPropagation();
    const params = new URL(document.location).searchParams;
    params.append('item', property.zpid);
    const newParams = params.toString();
    window.location.href = `${window.location.origin}/compare?${newParams}`;
  };

  const handleAddLike = event => {
    event.stopPropagation();
    dispatch(addLikesAsync({ property, token }));
  };

  const handleDeleteLike = event => {
    event.stopPropagation();
    dispatch(deleteLikesAsync({ zpid: currZpid, token }));
  };
  if (property) {
    const { address } = property;
    const streetAddress = address?.split(',')[0] || '';
    const city = address?.split(',')[1] || '';
    const provinceZipcode = address?.split(',')[2] || '';
    return (
      <Container onClick={() => navigateToPropertyPage(property.zpid)}>
        <PropertyCardContent>
          <PropertyImage
            src={property?.imgSrc}
            alt="Property"
            className="property-image"
          />
          {showHeartIcon &&
            (liked ? (
              <StyledHeartLikedIcon onClick={handleDeleteLike} />
            ) : (
              <StyledHeartBorderIcon onClick={handleAddLike} />
            ))}

          <StatusWrapper>
            <StyledStatusIcon />
            <StatusText>{property.listingStatus}</StatusText>
          </StatusWrapper>
          {showCompareButton && (
            <CompareButton onClick={handleCompare}>Compare</CompareButton>
          )}
          <PropertyInfo>
            <PropertyPrice>{convertPriceToCAD(property.price)}</PropertyPrice>
            <PropertySpec>
              {property.bedrooms && (
                <div>
                  <span className="property-bed">
                    Bed {property.bedrooms},{' '}
                  </span>
                  <span className="property-bath">
                    Bath {property.bathrooms},{' '}
                  </span>
                  <span className="property-area">
                    {property.livingArea} sqft,{' '}
                  </span>
                </div>
              )}
            </PropertySpec>
            <PropertyLocation>
              <p>{streetAddress}</p>
              <p>
                {city}, {provinceZipcode}
              </p>
            </PropertyLocation>
          </PropertyInfo>
        </PropertyCardContent>
      </Container>
    );
  }
}

export default PropertyCard;

const Container = styled.div`
  margin: 23px;
`;

const PropertyCardContent = styled.section`
  position: relative;
  width: 350px;
  height: 350px;
`;

const PropertyInfo = styled.section`
  position: absolute;
  width: 350px;
  height: 100px;
  bottom: 0;
  left: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  ${baseInfoRowStyles}
  line-height: 20px;
`;

const PropertyPrice = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 4px;
`;
const StyledHeartBorderIcon = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
`;

const StyledHeartLikedIcon = styled(FavoriteIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
`;

const StyledStatusIcon = styled(ShowChartIcon)`
  display: flex;
  align-items: center;
  color: white;
  font-size: small;
`;

const StatusWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  background-color: pink;
  border-radius: 10px;
  padding: 2px;
  height: 1.5rem;
`;

const StatusText = styled.span`
  margin-left: 5px;
  margin-right: 2px;
  color: white;
  font-size: 0.85rem;
  font-weight: bold;
`;

const PropertySpec = styled.div`
  font-size: 1rem;
`;

const PropertyLocation = styled.div`
  font-size: 1rem;
`;

const CompareButton = styled.button`
  position: absolute;
  bottom: 105px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  color: black;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
`;
