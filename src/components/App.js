import React from 'react';
import searchAddress from '../apis/searchAddress';

import IspTable from './IspTable';
import SearchBar from './SearchBar';
import ErrorMessage from './ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curAddress: 'Apple, Inc', ispData: [], error: null };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.onSearchSubmit(this.state.curAddress);
  }

  async onSearchSubmit(address) {
    const result = await searchAddress(address).catch(() => this.setState({ error: 'No Results.' }));
    if (!result) {
      this.setState({ error: 'No Results.' });
      return;
    }
    this.setState({
      error: null,
      curAddress: result.address,
      ispData: result.ispData,
    });
    return null;
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          value={this.state.curAddress}
          onFormSubmit={this.onSearchSubmit}
        />
        <ErrorMessage error={this.state.error} />
        <h4 className="sub header">
          Results for:&nbsp;&nbsp;
          <div className="ui ignored info message">
            <em>{this.state.curAddress}</em>
          </div>
        </h4>
        <IspTable ispData={this.state.ispData} />
      </div>
    );
  }
}

export default App;
