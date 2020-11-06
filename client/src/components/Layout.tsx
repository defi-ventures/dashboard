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
  <tok-main>
    <Helmet
      title='Tokenizer | Hub'
      defer={false}
      script={[{ 
        type: 'text/javascript', 
        innerHTML: `(function(){ window.ldfdr = window.ldfdr || {}; (function(d, s, ss, fs){ fs = d.getElementsByTagName(s)[0]; function ce(src){ var cs = d.createElement(s); cs.src = src; setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1); } ce(ss); })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_ywVkO4XROGw8Z6Bj.js'); })();` ,
      },{
        type: 'text/javascript',
        src: '//js.hsforms.net/forms/shell.js',
      },{
        type: 'text/javascript',
        innerHTML: `hbspt.forms.create({portalId:"8626414",formId:"f7f64d9f-9692-4c2f-8837-c5ad9d42aad4"});`,
      }]} >
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
    </Helmet>
    <div>
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