import styled from 'styled-components';
import { StyledLink } from './Link';

export default styled(StyledLink)`
  float: left;
  font-size: 16px;
  font-weight: bold;
  padding: 11px 14px;
  margin-right: 20px;
  &:hover {
    background-color: #f2f2f2;
    color: #333;
  }
`;
