import React, { FC } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { ArticleData } from '../hooks/useArticleData';

const ArticleContainer = styled.a`
  width: 15rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  margin: 0 1rem 4rem;

  h1, p {
    padding: 0;
    margin: .5rem 0;
  }

  h1 {
    font-size: 1.2rem;
    color: #111;
  }

  p {
    font-size: .9rem;
    color: #444;
    flex-grow: 1;
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
  border: 1px solid #AAA;
`;

const Author = styled.div`
  position: relative;
  padding-left: 44px;
  width: 100%;

  p {
    margin: .2rem 0;
    color: #222;

    &.create-read {
      color: #666;
    }
  }
`;

const AuthorImage = styled.div<ContentPropsImage>`
  background-image: url(${props => props.src});
  min-height: 36px;
  min-width: 36px;
  max-height: 36px;
  max-width: 36px;
  border-radius: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: calc(50% - 18px);
`;

const Article: FC<ArticleData> = ({
  title,
  virtuals,
  createdAt,
  author,
  medium_id,
  slug,
}) => {
  const formatedCreatedAt = moment(createdAt).format('MMM d');
  const readTime = `${Math.round(virtuals.readingTime)} min read`
  const createRead = `${formatedCreatedAt} - ${readTime}`
  return (
    <ArticleContainer href={ `https://medium.com/defi-ventures/${slug}-${medium_id}` }>
      <ContentImage src={ `https://cdn-images-1.medium.com/max/400/${virtuals.previewImage.imageId}` } />
      <h1>{ title }</h1>
      <p>{ virtuals.subtitle }</p>
      <Author>
        <AuthorImage src={ `https://cdn-images-1.medium.com/max/72/${author.imageId}` } />
          <p className='author-name'>{ author.name }</p>
          <p className='create-read'>{ createRead }</p>
      </Author>
    </ArticleContainer>
  );
};

export default Article;