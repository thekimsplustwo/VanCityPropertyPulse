import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField, Button, MenuItem } from '@mui/material';
import { editProfileAsync } from '../../redux/users/thunks';
import { FRONT_LOGIN_URL } from '../../config';
import { neighborhoodsVancouver } from '../SearchOption/neighborhoods';

function UserProfileEdit({ setModal }) {
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: user.firstName ?? '',
    lastName: user.lastName || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',
    region: user.region || '',
    photo: user.photo || '',
  });

  const handleInputChange = target => {
    const { name, value } = target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChangeForRegion = selectedValue => {
    setFormData(prevFormData => ({
      ...prevFormData,
      region: selectedValue, // Update the region with the selected value
    }));
  };

  const handleSaveBtn = () => {
    dispatch(editProfileAsync({ formData, token }));
    setModal(false);
    window.location.href = `${FRONT_LOGIN_URL}/mypage`;
  };

  return (
    <>
      <Overlay
        onClick={() => {
          setModal(false);
        }}
      />
      <ModalWrapper>
        <Main>
          <form onSubmit={handleSaveBtn}>
            <FormContainer>
              <Title>Edit Profile</Title>
              <TextField
                type="text"
                label="First Name"
                disabled
                name="firstName"
                value={formData.firstName}
              />

              <TextField
                type="text"
                label="Last Name"
                disabled
                name="lastName"
                value={formData.lastName}
              />

              <TextField
                type="email"
                label="Email"
                disabled
                name="email"
                value={formData.email}
              />

              <TextField
                type="text"
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                inputProps={{ maxLength: 10 }}
                onChange={e => handleInputChange(e.currentTarget)}
              />

              <TextField
                select
                label="Region"
                name="region"
                value={formData.region}
                onChange={e => handleInputChangeForRegion(e.target.value)}
                sx={{ textAlign: 'left' }}
              >
                {neighborhoodsVancouver.map(option => (
                  <MenuItem key={option.title} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>
            </FormContainer>
            <Button
              sx={{ margin: '8px' }}
              variant="outlined"
              onClick={() => setModal(false)}
            >
              Cancel
            </Button>
            <Button
              sx={{ margin: '8px' }}
              variant="contained"
              onClick={handleSaveBtn}
            >
              Save
            </Button>
          </form>
        </Main>
      </ModalWrapper>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalWrapper = styled.div`
  width: 650px;
  border-radius: 10px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 5px 14px 0 rgba(0, 0, 0, 0.2),
    9px 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const Main = styled.div`
  padding: 16px;
  width: 35em;
  height: 30em;
  margin: 20px;
  background-color: white;
  text-align: center;

  @media (max-width: 800px) {
    width: 22em;
    height: 35em;
  }
`;

const Title = styled.p`
  font-size: 28px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

export default UserProfileEdit;
