import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
	
  * {
    box-sizing: border-box;
  }

	img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
	
`;

export default GlobalStyle;
