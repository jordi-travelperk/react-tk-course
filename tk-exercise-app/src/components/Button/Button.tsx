import React from 'react';
import { StyledButton } from './styles';

export type Props = {
  primary?: boolean,
  rounded?: boolean,
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => any,
  children?: React.ReactNode
};

export default function Button(props: Props) {
  return (
    <StyledButton
      primary={props.primary}
      rounded={props.rounded}
      onClick={props.onClick}>{props.children}</StyledButton>
  );
}
