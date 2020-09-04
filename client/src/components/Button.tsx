import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--white);
  background-color: var(--primary);
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  outline : none;

  @media(max-width: 1200px) {
    font-size: .9rem;
    line-height: 1.3rem;
  }

  @media(max-width: 900px) {
    font-size: .8rem;
    line-height: 1.1rem;
    padding: 7px 20px;
    border-radius: 3px;
  }

  @media(max-width: 600px) {
    font-size: .7rem;
    line-height: .9rem;
    padding: 6px 18px;
    border-radius: 2px;
  }

  ${props => !props.disabled && `
    cursor: pointer;

    &:hover {
      background-color: var(--primary2);
    }
  `};
`;

type Props = {
  onClick?: () => any,
  href?: string,
  disabled?: boolean,
  className?: string,
};

const Button: FC<Props> = ({
  children,
  href,
  onClick,
  disabled,
  className,
}) => {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    }
  }

  return (
    <StyledButton
      className={ className } 
      onClick={ clickHandler } 
      disabled={ disabled }
    >
      { children }
    </StyledButton>
  );
};

export default Button;
