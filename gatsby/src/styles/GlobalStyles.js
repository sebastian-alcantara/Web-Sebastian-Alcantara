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

    @media (prefers-reduced-motion: reduce) {
      html {
          scroll-behavior: auto;
      }
    }
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
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: orange orange;
  }
  body::-webkit-scrollbar-track {
    background: whitesmoke;
  }
  body::-webkit-scrollbar-thumb {
    background-color: orange;
    border-radius: 6px;
    border: 3px solid whitesmoke;
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