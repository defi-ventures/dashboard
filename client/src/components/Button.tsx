import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1rem;
  color: white;
  background-color: #18A0FB;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  outline : none;

  ${props => !props.disabled && `
    cursor: pointer;

    &:hover {
      background-color: #0890EB;
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
