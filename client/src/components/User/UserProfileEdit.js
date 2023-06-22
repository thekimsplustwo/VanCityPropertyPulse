import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { useUser } from './UserProvider';

function UserProfileEdit() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    // age: '',
    // email: '',
    // phoneNumber: '',
    // region: '',
    // photo: null,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age.toString(),
    email: user.email,
    phoneNumber: user.phoneNumber,
    region: user.region,
    photo: user.photo,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      //   [name]: value,
      [name]: value !== '' ? value : user[name],
    }));
  };

  //   const handlePhotoUpload = e => {
  //     const file = e.target.files[0];
  //     setFormData(prevFormData => ({
  //       ...prevFormData,
  //       photo: file,
  //     }));
  //   };

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
      //   photo: null,
    });
    updateUser(formData);
    console.log(`user id is ${user.id}`);
    navigate(`/mypage/${user.id}`);
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
      {/* Photo:
      <input
        style={{ marginBottom: '10px' }}
        type="file"
        accept="image/*"
        name="photo"
        onChange={handlePhotoUpload}
      />
      <br /> */}
      <Button type="submit" variant="outlined">
        Save
      </Button>
    </form>
  );
}

export default UserProfileEdit;
