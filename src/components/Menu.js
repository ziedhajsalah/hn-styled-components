import React from 'react';
import styled, { css } from 'styled-components';
import { desktop, maxTablet } from './styles/media';
import { StyledLink } from './Link';

const MenuWrapper = styled.div`
  overflow: hidden;
  display: none;

  ${desktop(css`display: block;`)};

  ${props =>
    maxTablet(
      props.isHidden ||
        css`
      display: block;
      width: 100%;
      margin-top: 40px;
    `
    )};
`;

export const MenuItem = styled(StyledLink)`
  float: left;
  ${props =>
    maxTablet(
      props.isHidden ||
        css`
          float: none;
          display: block;
          text-align: left;
          font-size: 12px;
          letter-spacing: 1px;
          color: #333;
          background-color: #f6f6f6;
          border-bottom: 1px solid rgba(255,255,255,0.75);
          &:active {
            background-color: #e6e6e6;
            font-weight: bold;
          }
        `
    )};
`;

export default function Menu({ children, isHidden }) {
  return (
    <MenuWrapper isHidden={isHidden}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isHidden })
      )}
    </MenuWrapper>
  );
}
