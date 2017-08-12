import React from 'react';
import PropTypes from 'prop-types';
import { getItemUrl, getSourceUrl } from '../utils/helper';

import {
  HeaderWrapper,
  RankContainer,
  Title,
  SourceContainer,
  SourceLink,
} from './styles/index';

export default function Header({ url, itemId, rank, title }) {
  const titleUrl = url || getItemUrl(itemId);
  const sourceUrl = getSourceUrl(url);

  return (
    <HeaderWrapper>
      <RankContainer>
        {rank}.
      </RankContainer>
      <Title href={titleUrl}>
        {title}
      </Title>
      <SourceContainer>
        <SourceLink href={`http://${sourceUrl}`}>
          {sourceUrl}
        </SourceLink>
      </SourceContainer>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  itemId: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};
