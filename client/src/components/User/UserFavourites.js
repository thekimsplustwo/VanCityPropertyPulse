import React from 'react';
import { user } from '../../data/data';
import { Image, MarginOnly } from '../../styles/UserProfile';

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
