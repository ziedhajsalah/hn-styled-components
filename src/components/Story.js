import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Wrapper } from './styles/index';

export default class Story extends Component {
  render() {
    const { item } = this.props;

    return (
      <Wrapper>
        <Header
          itemId={item.id}
          url={item.url}
          title={item.title}
          rank={item.rank}
        />
        <Footer
          username={item.by}
          score={item.score}
          timestamp={item.time}
          itemId={item.id}
        />
      </Wrapper>
    );
  }
}

Story.propTypes = {
  item: PropTypes.object.isRequired,
};
