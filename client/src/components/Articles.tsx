import React, { useState } from 'react';
import styled from 'styled-components';

import Article from './Article';
import Button from './Button';
import useArticleData from '../hooks/useArticleData';

const ArticlesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70rem;
  margin: auto;

  > h1 {
    font-size: 1.2rem;
    color: #444;
    line-height: 2.8rem;
    width: 100%;
    border-bottom: 1px solid #EEE;
    font-weight: 200;
  }
`;

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

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  padding: 1rem 3rem;
`;

const LoadMoreIncrements = 8;

const Articles = () => {
  const [last, setLast] = useState(LoadMoreIncrements);
  const articles = useArticleData();

  return (
    <ArticlesSection>
      <h1>Trending</h1>
      <ArticlesContainer>
        { articles.slice(0, last).map(article => (
          <Article key={ article.id } { ...article } />
        ))}

      </ArticlesContainer>
      { articles.length > last && (
        <StyledButton onClick={() => setLast(last + LoadMoreIncrements)}>
          Load More
        </StyledButton>
      )}
    </ArticlesSection>
  );
};

export default Articles;
