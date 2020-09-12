import React from 'react';
import styled from 'styled-components';

import Tile from './Tile';
import useTileData from '../hooks/useTileData';

const TilesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 1.2rem;
    color: #444;
    line-height: 2.8rem;
    width: 100%;
    max-width: 70rem;
    border-bottom: 1px solid #EEE;
    font-weight: 200;
  }
`;

const TilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tiles = () => {
  const tiles = useTileData();

  return (
    <TilesSection>
      <TilesContainer>
        { tiles.filter(({ active }) => active).map(tile => (
          <Tile key={ tile.id } { ...tile } />
        ))}
      </TilesContainer>
    </TilesSection>
  );
};

export default Tiles;
