import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Api from './utils/api';
import StoryList from './components/StoryList';
import Navbar from './components/Navbar';

injectGlobal`
  @@font-face {
    font-family: 'Verdana, Geneva, sans-serif'
  }
  body {
    margin: 0;
  }
`;

function fetchSingleStory(id, index) {
  const rank = index + 1;
  return new Promise(resolve => {
    Api.fetch(`/item/${id}`, {
      then(data) {
        const item = data;
        item.rank = rank;
        resolve(item);
      },
    });
  });
}

class App extends Component {
  state = {
    newStories: [],
  };

  fetchNewStories(storyIds) {
    const actions = storyIds.slice(0, 30).map(fetchSingleStory);
    Promise.all(actions).then(data => this.setState({ newStories: data }));
  }

  componentDidMount() {
    Api.fetch('/newstories', {
      context: this,
      then(storyIds) {
        this.fetchNewStories(storyIds);
      },
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <StoryList items={this.state.newStories} />
      </div>
    );
  }
}

export default App;
