import React from 'react';
import { StyledSearchInput } from './styles';

export type Props = {
  value: string,
  placeholder?: string,
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => any,
  children?: React.ReactNode
};

export default function Button(props: Props) {
  return (
    <StyledSearchInput
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}>{props.children}</StyledSearchInput>
  );
}
