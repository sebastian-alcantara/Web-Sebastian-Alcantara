import React, { useRef } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Typewriter from "../components/Typewriter";
import ProjectCard from "../components/ProjectCard";
import ContactLinks from "../components/ContactLinks";
import SEO from "../components/SEO";

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
      font-size: 5rem;
      font-weight: bold;
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

  .typewriter-container {
    justify-self: center;
    width: 400px;
    background-color: var(--cardColor);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
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
    align-self: start;
  }

  .svg-arrow {

    transform: scale(0.6);

    path {
      fill: var(--textNormal);
    }
  }

  .second-section {
    margin: 0 auto;
    
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .project-grid {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-row-gap: 20px;
    padding-top: 2rem;
  }

  @media (max-width: 800px) {
    width: 90%;

    .first-impression {
      .greeting-name {
        align-self: end;
        font-size: 3rem;
        font-weight: bold;
      }
    }

    .typewriter-container {
      width: 80%;
    }
  }

`;

export default function Home({ data }) {
  const { title, greeting } = data.site.siteMetadata;
  const firstSectionRef = useRef();
  const secondSectionRef = useRef();

  const projectEdges = data.projects.edges;
  console.log(projectEdges);
  function handleNextClick() {
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        <section className="first-impression" ref={firstSectionRef}>
          <Bounce left>
            <div className="greeting-name">
              <h1 className="page-title">{greeting}</h1>
              <h1 className="page-title">{title}</h1>
            </div>
          </Bounce>
          <Bounce left>
            <div className="typewriter-container">
              <Typewriter />
            </div>
          </Bounce>
          <Bounce left>
            <ContactLinks />
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
          <div className="project-grid">
            {projectEdges.map((edge) => {
              return(
                <Fade left key={`fade-${edge.node.id}`}>
                  <ProjectCard
                    project={edge.node}
                    key={edge.node.id}
                  />
                </Fade>
              );
            })}
          </div>
        </section>
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
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          _rawExcerpt
          _rawBody
          mainImage {
            asset {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          title
          slug {
            current
          }
        }
      }
    }
  }
`;

/*
export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        greeting
        description
      }
    }
    projects: allSanityProject(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          body
          excerpt
          slug {
            current
          }
        }
      }
    }
  }
`;
*/