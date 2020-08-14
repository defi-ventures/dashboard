import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tiles from '../components/Tiles';
import Articles from '../components/Articles';

const Home = () => (
  <Layout>
    <Helmet title='Tokenizer | Apps' defer={false}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap" rel="stylesheet" />
    </Helmet>
    <Banner />
    <Tiles />
    <Articles />
  </Layout>
);

export default Home;
