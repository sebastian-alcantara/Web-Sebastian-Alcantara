import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const ContactLinksStyles = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 5px;
  justify-items: center;
  max-width: 300px;

  .svg-icon-container {
    width: 36px;
  }

  .svg-icon {
    path {
      fill: var(--social-link-color);
      transition-duration: 1s;
      transition-timing-function: ease;
    }
  }

  .svg-icon:hover {
    path {
      fill: var(--social-link-color-hover);
    }  
  }

  @media (max-width: 800px) {
    width: 80%;
  }

`;

export default function ContactLinks() {
  return(
    <StaticQuery 
      query = {graphql`
        query ContactLinksQuery {
          site {
            siteMetadata {
              github
              twitter
              email
            }
          }
        }
      `}
      render={data => (
        <ContactLinksStyles>
          <div className="svg-icon-container">
            <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512" preserveAspectRatio="none">
                <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
                c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
                c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
                c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
                c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
                c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
                c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
                c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
                c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
              </svg>
            </a>
          </div>
          <div className="svg-icon-container">
            <a href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
              <svg className="svg-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none">
                <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
                c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
                c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
                c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
                c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
                c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
                C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
                C480.224,136.96,497.728,118.496,512,97.248z"/>
              </svg>
            </a>
          </div>
          <div className="svg-icon-container">
            <a href={`mailto:${data.site.siteMetadata.email}`} target="_blank" rel="noopener noreferrer">
              <svg className="svg-icon" viewBox="0 0 511.996 511.996" xmlns="http://www.w3.org/2000/svg">
                <path d="m230.9 253.371c13.369 8.913 36.827 8.914 50.199-.001.002-.001.005-.003.007-.004l227.865-151.911c-7.474-21.616-28.018-37.188-52.142-37.188h-401.663c-24.125 0-44.668 15.572-52.143 37.188l227.87 151.912c.003.002.005.002.007.004z"/>
                <path d="m297.746 278.328c-.003.002-.005.004-.007.005-11.702 7.801-26.724 11.702-41.741 11.702-15.02 0-30.036-3.9-41.739-11.703-.002-.001-.003-.002-.005-.003l-214.254-142.835v257.072c0 30.417 24.747 55.163 55.166 55.163h401.666c30.418 0 55.164-24.746 55.164-55.163v-257.072z"/>
              </svg>
            </a>
          </div>
        </ContactLinksStyles>
      )}
    />

  );
};