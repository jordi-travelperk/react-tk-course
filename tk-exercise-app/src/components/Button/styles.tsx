import styled, { css } from 'styled-components/macro';
import { Props } from './Button';

export const StyledButton = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #252529;
  color: #37474f;
  margin: 0.5em 1em;
  padding: 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  ${props => props.primary && css`
    background: #37474f;
    color: white;
  `}

  ${props => props.rounded && css`
    border-radius: 20px;
  `}
`;
