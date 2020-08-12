import React, { FC } from 'react';
import styled from 'styled-components';

import { TileData } from '../hooks/useTileData';

const TileContainer = styled.a`
  width: 20rem;
  height: 10rem;
  background-color: #202123;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  text-decoration: none;
  position: relative;

  h1, p {
    padding: 0;
    margin: 0;
  }

  p {
    margin-top: .4rem;
    font-size: .65rem;
    text-align: center;
    color: #DDD;
  }

  &:hover h1 {
    color: orange;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;

  img {
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: -3rem;
  }
`;

const Tile: FC<TileData> = ({
  title,
  description,
  icon,
  url,
}) => (
  <TileContainer href={ url }>
    <TitleContainer>
      { icon && <img src={ icon.childImageSharp.original.src } /> }
      <h1>{ title }</h1>
    </TitleContainer>
    <p>{ description }</p>
  </TileContainer>
);

export default Tile;