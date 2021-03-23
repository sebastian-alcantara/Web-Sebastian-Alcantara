import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.nav`
  //margin-bottom: 3rem;
  display: grid;
  justify-content: center;
  //background-color: var(--color_6);
  max-width:100%;
  //height: 6rem;

  position: relative;
  height: 10rem;
  //background-image: linear-gradient(#ff9d2f, #ff6126);

  .footer-svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    polygon {
      fill: orange;
    }
  }

  .footer-content {
    z-index: 10;
  }

  .made-by {
    margin-bottom: 0;
    font-size: 1.5rem;
    padding-top: 3rem;
  }

  @media (max-width: 800px) {
    .menu-ul {
      width: 100%;
      grid-gap: 0;
    }

    a, button {
      width: 9.5rem;
      font-size: 2rem;
    }
  }
`;

export default function Nav() {
  return (
    <FooterStyles>
        <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,50 0,100 100,100 100,0"/>
        </svg>
        <div className="footer-content">
          <p className="made-by">
          &copy; Sebastián H. Alcántara {new Date().getFullYear()}
          <br/>
          Diseñado por <span style={{fontWeight: "bold", color: "dimgrey"}}>Sebastián Alcántara</span>
          </p>
        </div>
    </FooterStyles>
  );
}