import React from 'react';
import IspList from './IspList';
import nominatim from '../apis/nominatim';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { location: '' };

  componentDidMount() {
    this.onSearchSubmit('Apple, Inc');
    console.log(this.location);
  }

  onSearchSubmit = async (location) => {
    const response = await nominatim.get('', {
      params: {
        q: location,
        format: 'json',
        countrycodes: 'us',
        limit: 1,
      },
    });
    this.setState({ location: response.data[0].display_name });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <h3 className="ui header">Results for:</h3>
        {this.state.location}
        <IspList />
      </div>
    );
  }
}

export default App;
