import React from 'react';
import styled from 'styled-components';

import Tile from './Tile';
import useTileData from '../hooks/useTileData';

const TilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tiles = () => {
  const tiles = useTileData();

  return (
    <TilesContainer>
      { tiles.filter(({ active }) => active).map(tile => (
        <Tile key={ tile.id } { ...tile } />
      ))}
    </TilesContainer>
  );
};

export default Tiles;
