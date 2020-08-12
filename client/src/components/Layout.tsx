// @ts-nocheck
import React, { FC } from 'react';
import styled from 'styled-components';

import { applyPolyfills, defineCustomElements } from '@defi-ventures/tokenizer-common/loader';
import '@defi-ventures/tokenizer-common/dist/tokenizer-common/tokenizer-common.css';

applyPolyfills().then(() => {
  defineCustomElements();
});

const ContentContainer = styled.div`
  padding: 2rem;
  > * {
    margin-bottom: 3rem;
  }
`;

const Layout: FC = ({ children }) => (
  <tok-main>
    <tok-header></tok-header>
    <tok-content>
      <ContentContainer>
        { children }
      </ContentContainer>
    </tok-content>
    {/* <tok-side-menu></tok-side-menu> */}
    <tok-footer fixed></tok-footer>
  </tok-main>
);

export default Layout;