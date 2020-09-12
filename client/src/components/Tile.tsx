import React, { FC } from 'react';
import styled from 'styled-components';

import { TileData } from '../hooks/useTileData';
import Button from './Button';

const TileContainer = styled.div`
  max-width: 320px;
  width: 90%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  color: var(--text);
  margin: 1rem;
  padding: 14px;
  box-shadow: 4px 12px 26px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  align-items: flex-start;


  img {
    height: 4.5rem;
  }

  @media(max-width: 1200px) {
    max-width: 290px;

    img {
      height: 3rem;
    }
  }

  h1, p {
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weigth: bold;
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1rem;
    margin-top: .5rem;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    width: 47%;
  }
`;

const Tile: FC<TileData> = ({
  title,
  description,
  iconFull,
  primaryLink,
  secondaryLink,
}) => (
  <TileContainer>
    { iconFull && <img src={ iconFull.childImageSharp?.original?.src || iconFull.publicURL } /> }
    <h1>{ title }</h1>
    <p>{ description }</p>
    <ButtonsContainer>
      { primaryLink && <Button href={ primaryLink.url }>{ primaryLink.title }</Button> }
      { secondaryLink && <Button link href={ secondaryLink.url }>{ secondaryLink.title }</Button> }
    </ButtonsContainer>
  </TileContainer>
);

export default Tile;