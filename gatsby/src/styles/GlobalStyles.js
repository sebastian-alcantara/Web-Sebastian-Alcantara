import { createGlobalStyle } from 'styled-components';
//import bg from '../assets/images/bg.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    // Esquema activo
    --color_0: #E8EFF1;
    --color_1: #CCC6C6;
    --color_2: #FADCD6;
    --color_3: #DCCCC0;
    --color_4: #94BDA3;
    --color_5: #FFA500;
    --color_6: #32a852;
    --color_7: #1c8c3b;
    --color_8: #fafafa;

    --color_negro_1: #262626;
    --color_negro_2: #4a4a4a;
  }

  html {
    font-size: 8px;
    scroll-behavior: smooth;

    --bg: white;
    --textNormal: #222;
    --textTitle: #222;
    --textLink: #222;
    --hr: hsla(0, 0%, 0%, 0.2);

    --header-color: orange;

    --cardColor: #fff0d4;
    --cardColorHover: #ffe5b5;
    --cardBoxShadow: 0 7px 30px -10px #c9c9c9;

    --social-link-color: black;
    --social-link-color-hover: orange;

    --nav-link-underline: orangered;

    background-color: var(--bg);

    transition-duration: 0.3s;
    transition-timing-function: linear;

    @media (prefers-reduced-motion: reduce) {
      html {
          scroll-behavior: auto;
      }
    }
  }

  html.dark {
    -webkit-font-smoothing: antialiased;

    --bg: #1d3030;
    --textNormal: rgba(255, 255, 255, 0.88);
    --textTitle: white;
    --textLink: rgba(255, 255, 255, 0.88);
    --hr: hsla(0, 0%, 100%, 0.2);

    --header-color: black;

    --cardColor: #132020;
    --cardColorHover: #172626;
    --cardBoxShadow: none;

    --social-link-color: white;
    --social-link-color-hover: orange;

    --nav-link-underline: orangered;

    transition-duration: 0.3s;
    transition-timing-function: linear;

  }


  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--color_2);
    color: var(--color_0);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--color_2);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 10px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--cardColor) var(--bg);
  }

  body::-webkit-scrollbar-track {
    background: var(--bg);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--cardColor);
    border-radius: 6px;
  }

  hr {
    border: 0;
    height: 8px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .divider
  {
    position: relative;
    margin-top: 2rem;
    margin-bottom: 4rem;
    height: 1px;
  }

  .div-transparent:before
  {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, var(--color_7), transparent);
  }

::selection {
  color: white;
  background: var(--color_4);
}

`;

export default GlobalStyles;