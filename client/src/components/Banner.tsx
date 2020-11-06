import React, { FC } from 'react';
import styled from 'styled-components';

import { BannerData } from '../hooks/useBannerData';
import Button from './Button';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 0;
`;

const Copy = styled.div`
  max-width: 600px;
  width: 50%;
  text-align: left;

  h1 {
    font-size: 4rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
    margin-bottom: 31px;
    color: var(--text);

    @media(max-width: 1200px) {
      font-size: 3.5rem;
      margin-bottom: 25px;
    }

    @media(max-width: 900px) {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    @media(max-width: 600px) {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
  }
`;

const Hero = styled.div`
  flex-grow: 1;
  padding-left: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
  }
`;

type Props = {
  banner: BannerData,
};

const Banner: FC<Props> = ({ banner }) => {
  if (!banner) {
    return null;
  }

  const {
    title,
    hero,
    cta,
    secondaryCta,
  } = banner;

  return (
    <BannerContainer>
      <Copy>
        <h1>{ title }</h1>
        <Button href={ cta.url }>{ cta.title }</Button>
        { secondaryCta && <Button link href={ secondaryCta.url }>{ secondaryCta.title }</Button> }
      </Copy>
      { hero.childImageSharp  && <Hero><img src={hero.childImageSharp?.original?.src} /></Hero> }
    </BannerContainer>
  );
};

export default Banner;
