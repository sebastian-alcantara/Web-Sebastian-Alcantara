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
              &#8595;
            </button>
          </Bounce>
        </section>
        <section className="second-section" ref={secondSectionRef}>
          <div style={{width: "50vw"}}>
            <StaticImage src="../images/web-developer-doge.jpg" alt="A web dev Doge" />
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