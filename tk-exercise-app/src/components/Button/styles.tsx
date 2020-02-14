import styled, { css } from 'styled-components/macro';
import { Props } from './Button';

export const StyledButton = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #252529;
  color: #252529;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${props => props.primary && css`
    background: #252529;
    color: white;
  `}
`;
