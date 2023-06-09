import React from 'react';
import dummy from './DummyUser';
import { Image, MarginOnly } from '../../styles/UserProfile';

function UserFavourites() {
  return dummy.favourites.length === 0 ? (
    <div>Nothing to see!</div>
  ) : (
    dummy.favourites.map(url => {
      return (
        <MarginOnly key={dummy.id}>
          <Image src={url} alt={dummy.region} />
        </MarginOnly>
      );
    })
  );
}

export default UserFavourites;
