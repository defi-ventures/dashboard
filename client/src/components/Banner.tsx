import React from 'react';
import styled from 'styled-components';

import useBannerData from '../hooks/useBannerData';
import Button from './Button';

type BannerContainerProps = {
  backgroundUrl: string,
}

const BannerContainer = styled.div<BannerContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("${ props => props.backgroundUrl}");
  width: 100%;
  height: 12rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  justify-content: center;
  padding: 0 3rem;

  h1, p {
    margin: 0;
    padding: .3rem 0;
    color: white;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Banner = () => {
  const banner = useBannerData();
  console.log(banner);

  if (!banner) {
    return null;
  }

  const {
    title,
    description,
    background,
    cta,
  } = banner;

  return (
    <BannerContainer backgroundUrl={ background.childImageSharp.original.src }>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <Button href={ cta.url }>{ cta.title }</Button>
    </BannerContainer>
  );
};

export default Banner;
