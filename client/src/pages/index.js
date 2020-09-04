import React from 'react';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tiles from '../components/Tiles';
import Articles from '../components/Articles';
import Separator from '../components/Separator';

const Home = () => (
  <Layout>
    <Banner />
    <Separator />
    <Tiles />
    <Separator />
    <Articles />
  </Layout>
);

export default Home;
