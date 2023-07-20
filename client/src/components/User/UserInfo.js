import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import styled from 'styled-components';

function formatPhoneNumber(phoneNumber) {
  if (phoneNumber !== undefined) {
    const areaCode = phoneNumber.slice(0, 3);
    const firstPart = phoneNumber.slice(3, 6);
    const secondPart = phoneNumber.slice(6);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  return phoneNumber;
}

function UserInfo({ setModal }) {
  const user = useSelector(state => state.users.user);

  return (
    <Margin>
      <Bold>First Name: </Bold> {user.firstName}
      <br />
      <Bold>Last Name: </Bold> {user.lastName}
      <br />
      <Bold>Email: </Bold> {user.email}
      <br />
      <Bold>Phone Number: </Bold> {formatPhoneNumber(user.phoneNumber)}
      <br />
      <Bold>Region: </Bold> {user.region}
      <br />
      <Button variant="outlined" onClick={() => setModal(true)}>
        Edit Profile
      </Button>
    </Margin>
  );
}

export default UserInfo;

const Margin = styled.div`
  margin: 20px;
  line-height: 30pt;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bold = styled.b`
  font-weight: bold;
`;
