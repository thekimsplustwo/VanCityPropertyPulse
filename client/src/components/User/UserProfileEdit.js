import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { useUser } from './UserProvider';

function UserProfileEdit() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      [name]: value !== '' ? value : user[name],
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
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
    navigate(`/mypage/${user.id}`);
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Edit Profile</h1>
          <TextField
            type="text"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />

          <TextField
            type="number"
            label="Age"
            disabled
            value={formData.age}
            name="age"
            onChange={handleInputChange}
          />

          <TextField
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            label="Region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
          />
        </FormContainer>
        <Button type="submit" variant="outlined">
          Save
        </Button>
      </form>
    </Main>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const Main = styled.div`
  //   margin-left: auto;
  //   margin-right: auto;
  //   width: 25em;

  padding: 16px;
  width: 35em;
  height: 35em;
  margin: 20px;
  background-color: white;
  text-align: center;
`;

export default UserProfileEdit;
