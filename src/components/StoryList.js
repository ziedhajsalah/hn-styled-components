import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from 'react-spinkit';
import Story from './Story';

const Wrapper = styled.div`margin: 20px;`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export default class StoryList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  renderList(items) {
    return (
      <Wrapper>
        {items.map(item => <Story key={item.id} item={item} />)}
      </Wrapper>
    );
  }

  render() {
    const { items } = this.props;

    if (items.length > 0) {
      return this.renderList(items);
    } else {
      return (
        <LoadingWrapper>
          <Spinner name="ball-grid-pulse" fadeIn="none" />
        </LoadingWrapper>
      );
    }
  }
}
