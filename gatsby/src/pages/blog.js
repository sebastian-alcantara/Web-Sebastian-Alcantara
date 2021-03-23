import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const BlogPageStyles = styled.div`
  background-color: none;
  max-width: 800px;
  margin: 0 auto;

  .page-title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .posts-grid {
    display: grid;
    grid-template-rows: auto;
    gap: 20px;
  }

  .article-card {
    background: #fff0d4;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 7px 30px -10px #c9c9c9;

    :hover {
      background-color: #ffe5b5;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
  }

`;

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <>
      <BlogPageStyles>
        <Fade bottom>
          <h1 className="page-title">Ubi Snippets - My Blog</h1>
        </Fade>
        <div className="posts-grid">
          {posts.map(post => (
            <Fade bottom key={`fade-${post.id}`}>
              <article key={post.id}>
                <div className="article-card">
                  <Link to={`/blog${post.fields.slug}`} >
                    <h2>{post.frontmatter.title}</h2>
                  </Link>
                  <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            </Fade>
          ))}
        </div>
      </BlogPageStyles>
    </>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt(pruneLength: 300)
        id
        fields {
          slug
        }
      }
    }
  }
`;