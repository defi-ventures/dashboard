// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { applyPolyfills, defineCustomElements } from '@defi-ventures/tokenizer-common/loader';
import '@defi-ventures/tokenizer-common/dist/tokenizer-common/tokenizer-common.css';

applyPolyfills().then(() => {
  defineCustomElements();
});

const ContentContainer = styled.div`
  padding: 2rem;

  @media(max-width: 1200px) {
    padding: 2rem;
  }
  @media(max-width: 900px) {
    padding: 2rem 1.5rem;
  }
  @media(max-width: 600px) {
    padding: 1.5rem 1rem;
  }

  > * {
    margin-bottom: 3rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  padding-bottom: 5rem;
`;

const Layout: FC = ({ children }) => (
  <tok-main has-apps-side-menu>
    <Helmet title='Tokenizer | Hub' defer={false}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Helmet>
    <div className='with-apps-side-menu'>
      <tok-content>
        <ContentContainer>
          { children }
        </ContentContainer>
      </tok-content>
      <tok-apps-side-menu></tok-apps-side-menu>
      <tok-footer></tok-footer>
    </div>
  </tok-main>
);

export default Layout;