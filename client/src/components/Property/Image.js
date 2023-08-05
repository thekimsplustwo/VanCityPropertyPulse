import styled from 'styled-components';
import { Box } from '@mui/material';

function Image(props) {
  return (
    <Wrapper>
      <Box
        component="img"
        sx={{
          height: { xs: 'auto', sm: 300 },
          display: 'block',
          maxWidth: 500,
          overflow: 'hidden',
          width: '100%',
        }}
        src={props.image}
      />
    </Wrapper>
  );
}

export default Image;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
