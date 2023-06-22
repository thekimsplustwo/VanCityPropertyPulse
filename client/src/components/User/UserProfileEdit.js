import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const user = {
  id: 1,
  firstName: 'Pukku',
  lastName: 'Kim',
  age: 7,
  email: 'pukku@ubc.ca',
  phoneNumber: '7787787788',
  region: 'Point Grey',
  photo: 'https://storage.googleapis.com/pukkukim/%E1%84%88%E1%85%AE.jpg',
};

function UserProfileEdit(user) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: '',
    region: '',
    photo: null,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = e => {
    const file = e.target.files[0];
    setFormData(prevFormData => ({
      ...prevFormData,
      photo: file,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform the form submission or API call to update the user profile
    console.log('Form data:', formData);
    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      phoneNumber: '',
      region: '',
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      First Name:
      <TextField
        sx={{ marginBottom: '10px' }}
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <br />
      Last Name:
      <TextField
        sx={{ marginBottom: '10px' }}
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <br />
      Age:
      <TextField
        sx={{ marginBottom: '10px' }}
        disabled
        id="outlined-disabled"
        defaultValue={user.age}
        type="number"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
      />
      <br />
      Email:
      <TextField
        sx={{ marginBottom: '10px' }}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <br />
      Phone Number:
      <TextField
        sx={{ marginBottom: '10px' }}
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <br />
      Region:
      <TextField
        sx={{ marginBottom: '10px' }}
        type="text"
        name="region"
        value={formData.region}
        onChange={handleInputChange}
      />
      <br />
      Photo:
      <input
        style={{ marginBottom: '10px' }}
        type="file"
        accept="image/*"
        name="photo"
        onChange={handlePhotoUpload}
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default UserProfileEdit;
