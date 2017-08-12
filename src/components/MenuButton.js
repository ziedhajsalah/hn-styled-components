import React from 'react';
import styled, { css } from 'styled-components';
import { desktop } from './styles/media';
import { StyledLink } from './Link';

const MenuButton = styled(StyledLink).attrs({
  height: null,
  widht: null,
})`
  height: 16px;
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  line-height: 14px;
  cursor: pointer;

  &:hover {
    background: none;
    color: #f2f2f2;
  }

  ${desktop(css`
    display: none;
  `)};
`;

export default props => <MenuButton {...props}>&#9776</MenuButton>;
