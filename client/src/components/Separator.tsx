import React, { FC } from 'react';
import styled from 'styled-components';

const SeparatorContainer = styled.div`
  margin: 10px 0 40px 0;
  padding: 0;
  width: 100%;
  display: flex;
  padding-top: 20px;
  align-items: center;
  position: relative;

  >div {
    width: 70px;
    border-top: 3px solid var(--primary);
    top: 0;
    left: 0;
    height: 3px;
    position: absolute;
  }

  a {
    text-decoration: none;
    pointer: cursor;
    color: var(--grey-light);
    &:hover {
      opacity: .5;
    }
  }

  h1 {
    font-size: 1.875rem;
    line-height: 140%;
    color: var(--text);
    font-weight: normal;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }

  @media(max-width: 900px) {
    border-top-width: 2px;

    >div {
      width: 50px;
    }

    h1 {
      font-size: 1.125rem;
    }
  }

  @media(max-width: 600px) {
    a {
      font-size: 0.75rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

type Props = {
  link?: string,
  linkText?: string,
};

const Separator: FC<Props> = ({
  children,
  link,
  linkText,
}) => (
  <SeparatorContainer>
    <div />
    <h1>{ children }</h1>
    { link && linkText && (
      <a target='blank' href={link}>{linkText}</a>
    )}
  </SeparatorContainer>
)

export default Separator;
