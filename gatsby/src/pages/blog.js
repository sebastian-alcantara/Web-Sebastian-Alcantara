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
    font-size: 5rem;
    font-weight: bold;
  }

  .posts-grid {
    display: grid;
    grid-template-rows: auto;
    gap: 20px;
    margin-bottom: 20px;
  }

  .article-card {
    background: var(--cardColor);
    border-radius: 5px;
    padding: 10px;
    box-shadow: var(--cardBoxShadow);

    :hover {
      background-color: var(--cardColorHover);
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
            <Fade left key={`fade-${post.id}`}>
              <article key={post.id}>
                <div className="article-card">
                  <Link to={`/blog${post.fields.slug}`} >
                    <h2>{post.frontmatter.title}</h2>
                  </Link>
                  <small>{post.frontmatter.date} · <span role="img" aria-label="Coffee">{post.frontmatter.icon}</span> {post.fields.readingTime.text}</small>
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
          date(formatString: "MMMM Do, YYYY")
          title
          author
          icon
        }
        excerpt(pruneLength: 300)
        id
        fields {
          slug
          readingTime {
            text
          }
        }
      }
    }
  }
`;