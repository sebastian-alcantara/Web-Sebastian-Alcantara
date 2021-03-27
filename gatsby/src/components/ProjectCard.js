import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import PortableText from "@sanity/block-content-to-react";

const serializers = {
  marks: {
    link: ({mark, children}) => {
      const { blank, href } = mark;
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const CardStyles = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  background-color: var(--cardColor);
  border-radius: 5px;
  padding: 20px;
  box-shadow: var(--cardBoxShadow);

  .title-and-image-container {
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 10px;

    h2 {
      text-decoration: underline;
      text-decoration-color: orange;
      font-weight: 700;
    }

    .image-container {
      margin: 0 auto;
      width: 80%;

      img {
        border-radius: 10px;
      }
    }
  }

  .text-container {
    p {
      text-align: left;
    }
  }
`;

export default function ProjectCard({ project }) {
  return(
    <>
      <CardStyles>
        <div className="title-and-image-container">
          <h2>{project.title}</h2>
          <div className="image-container">
            <GatsbyImage image={project.mainImage.asset.gatsbyImageData} alt={project.title}/>
          </div>
        </div>
        <div className="text-container">
          <PortableText
            blocks={project._rawBody}
            serializers={serializers}
          />
        </div>
      </CardStyles>
    </>
  );
};