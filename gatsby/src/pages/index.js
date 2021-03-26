import React, { useRef } from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import Typewriter from "../components/Typewriter";

const HomePageStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .first-impression {
    height: calc(100vh - 10rem);
    margin: 0 auto;
    
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    text-align: center;

    .greeting-name {
      align-self: end;
    }

    p {
      justify-self: left;
      align-self: start;
      text-align: left;
    }
  }

  .page-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .section-scroll-button {
    background-color: transparent; /* Green */
    border: none;
    padding: 0;
    text-align: center;
    text-decoration: none;
    color: black;
    display: inline-block;
    outline: none;
    box-shadow: none;
    margin: 0 auto;
    width: 4rem;
    height: 4rem;
  }

  .svg-arrow {

    transform: scale(0.6);

    path {
      fill: var(--textNormal);
    }
  }

  .second-section {
    height: 100vh;
    margin: 0 auto;
    
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }


  @media (max-width: 800px) {
    width: 90%;
  }

`;

export default function Home({ data }) {
  const { title, description, greeting } = data.site.siteMetadata;
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();

  function handleNextClick() {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <HomePageStyles>
        <section className="first-impression" ref={firstSectionRef}>
          <Bounce left>
            <div className="greeting-name">
              <h1 className="page-title">{greeting}</h1>
              <h1 className="page-title">{title}</h1>
            </div>
          </Bounce>
          <Bounce left>
            <Typewriter />
          </Bounce>
          <Bounce up>
            <button className="section-scroll-button" onClick={handleNextClick}>
            <svg className="svg-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.996 491.996">
                <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
                L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
                c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
                c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
                C491.996,136.902,489.204,130.046,484.132,124.986z"/>
            </svg>
            </button>
          </Bounce>
        </section>
        <section className="second-section" ref={secondSectionRef}>
          <div style={{width: "50vw"}}>
            <StaticImage src="../assets/images/web-developer-doge.jpg" alt="A web dev Doge" />
          </div>
          <button className="section-scroll-button" onClick={handleNextClick}>
            &#8595;
          </button>
        </section>
        <Link to="/blog">Este es mi blog</Link>
      </HomePageStyles>
    </>
  );
};

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        greeting
        description
      }
    }
  }
`;