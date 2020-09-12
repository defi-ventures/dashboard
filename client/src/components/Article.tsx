import React, { FC } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { ArticleData } from '../hooks/useArticleData';
import useHubMain from '../hooks/useHubMain';
import Button from './Button';

const ArticleContainer = styled.div`
  width: 17.5rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  text-decoration: none;
  position: relative;
  margin: 0 1rem 4rem;

  h1, p, a {
    padding: 0;
    margin: 0;
    margin-top: .625rem;
  }

  h1 {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: var(--text);
    flex-grow: 1;
  }

  p, a {
    font-size: 0.875rem;
    color: var(--grey-light);
  }

  a {
    text-decoration: none;
    pointer: cursor;
    &:hover {
      opacity: .5;
    }
  }
`;

type ContentPropsImage = {
  src: string,
};

const ContentImage = styled.div<ContentPropsImage>`
  background-image: url(${props => props.src});
  min-height: 10rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

const Article: FC<ArticleData> = ({
  title,
  virtuals,
  createdAt,
  medium_id,
  slug,
}) => {
  const formatedCreatedAt = moment(createdAt).format('MMM d');
  const readTime = `${Math.round(virtuals.readingTime)} min read`;
  const createRead = `${formatedCreatedAt} - ${readTime}`;
  const { readMore } = useHubMain();

  return (
    <ArticleContainer>
      <ContentImage src={ `https://cdn-images-1.medium.com/max/400/${virtuals.previewImage.imageId}` } />
      <p>{ createRead }</p>
      <h1>{ title }</h1>
      <a target='blank' href={ `https://medium.com/defi-ventures/${slug}-${medium_id}` }>{ readMore }</a>
    </ArticleContainer>
  );
};

export default Article;