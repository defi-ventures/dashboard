import React, { useState } from 'react';
import styled from 'styled-components';

import Article from './Article';
import Button from './Button';
import useArticleData from '../hooks/useArticleData';

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2rem 0;
  width: 100%;

  @media(min-width: 600px) {
    justify-content: space-around;
  }
`;

const Articles = () => {
  const articles = useArticleData();

  return (
    <ArticlesContainer>
      { articles.map(article => (
        <Article key={ article.id } { ...article } />
      ))}

    </ArticlesContainer>
  );
};

export default Articles;
