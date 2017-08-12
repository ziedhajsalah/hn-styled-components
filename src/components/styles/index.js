import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 8px;
  margin: 8px;

  box-shadow: 1px 1px 5px #888888;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12pt;
`;

export const RankContainer = styled.span`
  margin: 0px 5px;
  color: #828282;
`;

export const Title = styled.a.attrs({
  target: '_blank',
})`
  color: #000000;
  text-decoration: none;
  margin: 0px 2px;

  &:visited {
    color: #828282;
  }
`;

export const SourceContainer = styled.span`
  font-size: 10px;
  margin-top: 1px;
  color: #828282;
`;

export const SourceLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  color: #828282;
  text-decoration: none;
  margin: 0px 1px;
`;

export const FooterWrapper = styled.div`
  padding: 4px 0px 0px 24px;
  font-size: 8pt;
  color: #828282;

  margin: 0;
`;

export const FooterLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  color: #828282;
  text-decoration: none;
  margin: 0px 3px;
`;
