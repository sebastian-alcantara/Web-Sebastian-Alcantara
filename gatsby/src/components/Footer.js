import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
      fill: var(--header-color);
    }
  }

  .footer-content {
    z-index: 10;
  }

  .made-by {
    margin-bottom: 0;
    font-size: 1.5rem;
    padding-top: 5rem;

    h4 {
    margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 800px) {
    .menu-ul {
      width: 100%;
      grid-gap: 0;
    }

    button {
      width: 9.5rem;
      font-size: 2rem;
    }
  }
`;

export default function Footer({ data }) {
  return (
    <StaticQuery 
      query = {graphql`
        query FooterQuery {
          site {
            siteMetadata {
              twitter
            }
          }
        }
      `}
      render={data => (
        <FooterStyles>
          <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,50 0,100 100,100 100,0"/>
          </svg>
          <div className="footer-content">
            <h4 className="made-by">
            Designed with <span role="img" aria-label="love">❤️</span> by <span style={{fontWeight: "bold", color: "dimgrey"}}><a
              href={data.site.siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
              >Sebastián Alcántara</a></span>
            </h4>
          </div>
        </FooterStyles>
      )}
    />
  );
}