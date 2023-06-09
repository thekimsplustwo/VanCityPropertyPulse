import React from 'react';
import styled from 'styled-components';
import { user } from '../../data/data';

function UserFavourites() {
  return user.favourites.length === 0 ? (
    <div>Nothing to see!</div>
  ) : (
    user.favourites.map(url => {
      return (
        <MarginOnly key={user.id}>
          <Image src={url} alt={user.region} />
        </MarginOnly>
      );
    })
  );
}

export default UserFavourites;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const MarginOnly = styled.div`
  margin: 20px;
`;
