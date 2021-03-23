import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

const PostStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }

  .post-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: bold;
  }

  .gatsby-highlight {
    width: 90%;
    margin: 0 auto;
  }

  .language-text {
    background-color: lightgrey;
    color: black;
    font-family: Arial, sans-serif;
    text-shadow: none;
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 1.15;
    padding-bottom: 1px;
    padding-top: 1px;
    margin-bottom: 2px;
    padding-left: 5px;
    padding-right: 5px;
  }

  li {
    font-size: 2.5rem;
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-decoration: underline;
  }

`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <>
      <PostStyles>
        <div className="post-title">{post.frontmatter.title}</div>
        <h4>{post.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostStyles>
    </>
  );
};

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`;