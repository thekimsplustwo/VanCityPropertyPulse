import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
	
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
  margin: 0;
  padding: 0;
  background-color: rgba(249, 247, 247, 0.872);

}

img {
  max-width: 100%;
  max-height: 100%;
}

a {
  color: inherit;
  text-decoration: inherit;
}

div {
  box-sizing: border-box;
}
	
`;

export default GlobalStyle;
