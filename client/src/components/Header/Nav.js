import React, { useState } from 'react';
import Input from './Input';
import Menu from './Menu';

function Nav() {
  const [searchToggle, setSearchToggle] = useState(true);
  return (
    <div>
      <Menu setSearchToggle={setSearchToggle} />
      {searchToggle && <Input />}
    </div>
  );
}

export default Nav;
