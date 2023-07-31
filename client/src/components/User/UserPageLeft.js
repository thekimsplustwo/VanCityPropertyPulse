import styled from 'styled-components';
import UserCard from './UserCard';
import UserInfo from './UserInfo';

function UserPageLeft({ setModal }) {
  return (
    <Outer>
      <WrapperOne>
        <UserCard />
      </WrapperOne>
      <Spacer />
      <WrapperTwo>
        <UserInfo setModal={setModal} />
      </WrapperTwo>
    </Outer>
  );
}

export default UserPageLeft;

const WrapperOne = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
  height: 48%;
`;

const WrapperTwo = styled.div`
  border-radius: 15px;
  padding: 16px;
  width: 100%;
  background-color: white;
  text-align: center;
  box-shadow: 10px 10px #fbe8e9;
  height: 48%;
`;

const Outer = styled.div`
  height: 100%;
`;

const Spacer = styled.div`
  height: 4%;
`;
