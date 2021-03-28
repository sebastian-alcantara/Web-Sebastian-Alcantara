import React from "react";
import styled from "styled-components";

export default function About() {

  const AboutStyles = styled.div`
    max-width: 800px;
    margin: 0 auto;

    @media (max-width: 800px) {
      width: 90%;
    }
  `;
  return (
    <>
      <AboutStyles>
        <h1>Hi there</h1>
        <p>
          I’m Sebastián Alcántara, a chemical engineer passionate for coding, full stack web developement, game design, scientific skepticism and maybe some exercise.
        </p>
        <p>
          Very happily married, father of two awesome kids. 
        </p>
        <p>
          I love to learn new technologies, and I'm happy to say that I'm quite comfortable working with:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla JavaScript</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Python</li>
          <li>Django</li>
          <li>C#</li>
          <li>Unity</li>
          <li>Git</li>
         </ul>
        <p>
          I have also played around with Ruby and Jekyll, since I built the previous version of my blog with that stack.
        </p>
        <p>
          Also, I am currently mantaining a Wordpress site, so I have a basic knowledge of that tech as well.
        </p>
        <p>
          Since I love to learn new things, Svelte is next I presume!
        </p>
        <p>
          Also, since I love how SVGs interact with HTML and CSS to create beautiful sites, I will be learning about that to.
        </p>
        <p>
          Looking forward to build amazing stuff!
        </p>
      </AboutStyles>
    </>
  );
};