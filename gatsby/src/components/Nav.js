import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import nav_shape from '../images/nav_shape.svg';

const NavStyles = styled.nav`
  //margin-bottom: 3rem;
  display: grid;
  justify-content: center;
  //background-color: var(--color_6);
  max-width:100%;
  //height: 6rem;

  position: relative;
  height: 10rem;
  //background-image: linear-gradient(#ff9d2f, #ff6126);

/*
  .shape_container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(${nav_shape});
    background-size: 100% 100%;
  }
*/
  .nav-svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    
    polygon {
      fill: orange;
    }
  }

  .menu-ul {
    z-index: 10;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    width: 70%;
    display: grid;
    //grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: auto auto auto auto;

    grid-template-rows: auto;
    gap: 0;

    //margin-top: -6rem;

    justify-items: center;
  }

  a, button {
    margin: 0;
    padding: 0;
    justify-self: center;
    box-shadow: none;
    text-shadow: none;
    outline:none;
    color: black;
    font-size: 2.5rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    width: 15rem;
    background-color: transparent;
    line-height: 6rem;
    //-webkit-tap-highlight-color: var(--color_7);
    //padding-top: 1rem;
    //padding-bottom: 1rem;
    //border-radius: 3px;

    &:hover {
      font-weight: bolder;
      //background-color: var(--color_7);
      //color: white;
    }
    img {
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
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
    <NavStyles>
        <svg className="nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 0,100 100,50 100,0"/>
        </svg>
      <ul className="menu-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </NavStyles>
  );
}