import React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

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

    h1 {
      align-self: end;
    }

    p {
      align-self: start;
    }
  }

  .page-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 800px) {
    width: 90%;
  }

`;

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <HomePageStyles>
        <div className="first-impression">
          <Bounce left>
            <h1 className="page-title">{title}</h1>
          </Bounce>
          <Bounce left>
            <p>{description}</p>
          </Bounce>
          <Bounce up>
            <div>
              &#8595;
            </div>
          </Bounce>
        </div>
        <div style={{width: "50vw"}}>
          <StaticImage src="../images/web-developer-doge.jpg" alt="A web dev Doge" />
        </div>
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
        description
      }
    }
  }
`;