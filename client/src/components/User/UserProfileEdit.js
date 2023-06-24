import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { editProfileAsync } from '../../redux/users/thunks';

function UserProfileEdit({ setModal }) {
  const user = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: user.firstName ?? '',
    lastName: user.lastName || '',
    age: user.age || '',
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

  // const handleSubmit = e => {
  //   console.log('got here');
  //   e.preventDefault();
  //   const { email, region } = formData;
  //   dispatch(editProfileAsync(email, region));
  //   // navigate('/mypage');
  // };

  const handleSaveBtn = () => {
    setModal(false);
    console.log('dispatch ', formData);
    dispatch(editProfileAsync(formData));
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
              <h1>Edit Profile</h1>
              <Section>
                <Title>phone number</Title>
                <EditContainer>
                  <EditInput
                    type="text"
                    value={formData.phoneNumber}
                    label="phoneNumber"
                    name="phoneNumber"
                    onChange={e => handleInputChange(e.currentTarget)}
                  />
                </EditContainer>
              </Section>
              <Section>
                <Title>region</Title>
                <EditContainer>
                  <EditInput
                    type="text"
                    value={formData.region}
                    label="Region"
                    name="region"
                    onChange={e => handleInputChange(e.currentTarget)}
                  />
                </EditContainer>
              </Section>
            </FormContainer>
            <EditProfileButton onClick={handleSaveBtn}>Save</EditProfileButton>
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
  padding: 30px;
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
  height: 35em;
  margin: 20px;
  background-color: white;
  text-align: center;
`;

const EditInput = styled.input`
  flex: 1;
  width: 50%;
  height: 50px;
  padding: 13px 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  :focus {
  }
`;

const EditProfileButton = styled.div`
  padding: 30px;
  font-size: 20px;
  font-weight: 600px;
  color: lightblue;
  opacity: 0.6;
  padding: 2px;
  &:hover {
    opacity: 1;
    cursor: pointer;
    font-size: 20px;
    font-weight: 800px;
  }
  z-index: 99;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  alingn-content: center;
  z-index: 99;
`;

const Title = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alingn-content: center;
  margin-bottom: 12px;
  padding: 0 13px;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: 670px;
  line-height: 1.6;
`;

const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 10px;
  z-index: 99;
`;
export default UserProfileEdit;
