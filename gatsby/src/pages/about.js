import React from "react";
import styled from "styled-components";

export default function About() {

  const AboutStyles = styled.div`
    max-width: 800px;
    margin: 0 auto;

    h1 {
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 5rem;
      font-weight: bold;
    }

    .name-style {
      font-weight: bold;
    }

    .stack-list-container {
      margin: 0 auto;
      max-width: 400px;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    .stack-list {
      display: grid;
      grid-template-columns: 50% 50%;
      margin: 0 auto;
      background-color: var(--cardColor);
      border-radius: 5px;
      padding: 2px 5px 2rem 5px;
      box-shadow: var(--cardBoxShadow);

      li {
        font-family: Merriweather, Georgia, serif, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 2.5rem;
        padding-left: 2rem;
        list-style: none;
        padding-top: 2rem;
      }

      li::before {
        color: var(--marker-color);
        font-size: 2.5rem;
        font-weight: bold;
        content: ">";
        padding-left: 1.5px;
        padding-bottom: 1px;
        text-align: center;
        background-color: var(--marker-bg);
        width: 2.8rem;
        height: 2.8rem;
        //line-height: 3rem;
        border-radius: 50%;
        display: inline-block;
        margin-right: 2rem;
      }

    }

    @media (max-width: 800px) {
      width: 90%;
    }
  `;
  return (
    <>
      <SEO title="About me" />
      <AboutStyles>
        <h1>Hi there!</h1>
        <p>
          I’m <span className="name-style">Sebastián Alcántara</span>, a chemical engineer passionate about coding, full-stack web development, game design, scientific skepticism, and maybe some exercise.
        </p>
        <p>
          Very happily married, father of two awesome kids.
        </p>
        <p>
          I love to learn new technologies, and I'm happy to say that I have some experience with:
        </p>
        <div className="stack-list-container">
          <ul className="stack-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Python</li>
            <li>Django</li>
            <li>C#</li>
            <li>Unity</li>
            <li>Git</li>
          </ul>
        </div>
        <p>
          I have also played around with Ruby and Jekyll, since I built the previous version of my blog with that stack.
        </p>
        <p>
          Also, I am currently maintaining a WordPress site, so I have a basic knowledge of that tech as well.
        </p>
        <p>
          Since I love to learn new things, Svelte and TypeScript are next I presume!
        </p>
        <p>
          Also, since I love how SVGs interact with HTML and CSS to create beautiful sites, I will be learning about that too.
        </p>
        <p>
          Looking forward to building amazing stuff!
        </p>
      </AboutStyles>
    </>
  );
};