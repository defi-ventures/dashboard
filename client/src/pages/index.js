import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tiles from '../components/Tiles';

const Home = () => (
  <Layout>
    <Helmet title='Tokenizer | Dashboard' defer={false} />
    <Banner />
    <Tiles />
  </Layout>
);

export default Home;
