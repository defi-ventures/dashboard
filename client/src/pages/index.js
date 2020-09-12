import React from 'react';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Tiles from '../components/Tiles';
import Articles from '../components/Articles';
import Separator from '../components/Separator';
import useHubMain from '../hooks/useHubMain';

const Home = () => {
  const {
    appsTitle,
    articlesTitle,
    viewAll,
  } = useHubMain();

  return (
    <Layout>
      <Banner />
      <Separator>{ appsTitle }</Separator>
      <Tiles />
      <Separator link='https://medium.com/defi-ventures' linkText={viewAll}>{ articlesTitle }</Separator>
      <Articles />
    </Layout>
  );
};

export default Home;
