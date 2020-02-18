import styled, { css } from 'styled-components/macro';
import { Props } from './SearchInput';

export const StyledSearchInput = styled.input<Props>`
  font-size: 14px;
  line-height: 1;
  background-color: #37474f;
  width: 200px;
  margin-left: 1rem;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;
