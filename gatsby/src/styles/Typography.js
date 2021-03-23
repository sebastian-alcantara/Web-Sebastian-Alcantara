import { createGlobalStyle } from 'styled-components';

//import font from '../assets/fonts/Montserrat-Regular.ttf';
//import font from '../assets/fonts/BodoniModa-VariableFont_opsz_wght.woff';
//import font from '../assets/fonts/Poppins-Regular.ttf';
//import font from '../assets/fonts/Alegreya-Regular.woff';
//import font_bold from '../assets/fonts/Alegreya-Bold.woff';
//import font_italic from '../assets/fonts/Alegreya-Italic.woff';


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  }

  html {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    //color: black;
    color: var(--color_negro_1);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  p {
    font-size: 2.5rem;
  }
  .cita {
    font-style: italic;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: black;
    text-decoration-color: var(--color_5);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: darkgray;
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;