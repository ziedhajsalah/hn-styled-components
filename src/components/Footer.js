import React from 'react';
import PropTypes from 'prop-types';
import { FooterWrapper, FooterLink } from './styles/index';
import { getUserUrl, getItemUrl } from '../utils/helper';

export default function Footer({ username, itemId, score, timestamp }) {
  const userUrl = getUserUrl(username);
  const itemUrl = getItemUrl(itemId);

  return (
    <FooterWrapper>
      {score} point by
      <FooterLink href={userUrl}>{username}</FooterLink>
      |
      <FooterLink>{new Date(timestamp * 1000).toDateString()}</FooterLink>
      |
      <FooterLink href={itemUrl}>view on HackerNews</FooterLink>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  username: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};
