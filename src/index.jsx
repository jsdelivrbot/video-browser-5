import React from 'react';
import ReactDOM from 'react-dom';
import youTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCxn5UQFVUkaEbP9fkbWVw43EN0Te4RSw4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    youTubeSearch({ key: API_KEY, term: 'JavaScript' }, videos => this.setState({ videos }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
