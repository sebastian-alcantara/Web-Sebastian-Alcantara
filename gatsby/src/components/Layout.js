import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';

const SiteBorderStyles = styled.div`
  max-width: 100%;
  margin: 0;
`;

const ContentStyles = styled.div`
  //background: white;
  padding: 0;
  margin: 0;
  /*
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 90%;
  }
  */
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </div>
  );
}