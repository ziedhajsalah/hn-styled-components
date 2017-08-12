import styled, { css } from 'styled-components';
import { desktop } from './styles/media';

export const StyledLink = styled.a`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 12px 14px;
  text-decoration: none;
  font-size: 14px;
  ${desktop(css`
    &:hover {
      color: #fff;
    }
  `)};
`;
