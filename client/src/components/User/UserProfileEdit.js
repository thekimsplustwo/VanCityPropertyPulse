import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { useUser } from './UserProvider';
import { getUserAsync, editProfileAsync } from '../../redux/users/thunks';

function UserProfileEdit() {
  const user = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  console.log('user in edit: ', user);

  const [formData, setFormData] = useState({
    // firstName: user.firstName ?? '',
    // lastName: user.lastName || '',
    // age: user.age || '',
    // email: user.email || '',
    // phoneNumber: user.phoneNumber || '',
    // region: user.region || '',
    // photo: user.photo || '',
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    email: user.email,
    phoneNumber: user.phoneNumber,
    region: user.region,
    photo: user.photo,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    console.log('value :', value);
    console.log('value :', value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value !== '' ? value : user[name],
    }));
    console.log('in handleInput formData:  ', formData);
  };
  console.log('formData:  ', formData);

  const handleSubmit = e => {
    console.log('got here');
    e.preventDefault();
    const { email, region } = formData;
    dispatch(editProfileAsync(email, region));
    // navigate('/mypage');
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
            value={user.firstName}
            onChange={e => handleInputChange(e)}
          />

          <TextField
            type="text"
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={e => handleInputChange(e)}
          />

          <TextField
            type="number"
            label="Age"
            disabled
            value={user.age}
            name="age"
            onChange={handleInputChange}
          />

          <TextField
            type="email"
            label="Email"
            name="email"
            value={user.email}
            onChange={e => handleInputChange(e)}
          />

          <TextField
            type="text"
            label="Phone Number"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            label="Region"
            name="region"
            value={user.region}
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
