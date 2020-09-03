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

  * {
    box-sizing: border-box;
  }

  padding-bottom: 5rem;
`;

const Layout: FC = ({ children }) => (
  <tok-main has-apps-side-menu>
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