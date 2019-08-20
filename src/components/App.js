import React from 'react';
import { fetchBlockcode, fetchIspData } from '../apis/fcc';
import nominatim from '../apis/nominatim';

import IspTable from './IspTable';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curAddress: '', ispData: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.onSearchSubmit('Apple, Inc');
  }

  async onSearchSubmit(address) {
    const nominatimRes = await nominatim.get('', {
      params: {
        q: address,
        format: 'json',
        countrycodes: 'us',
        limit: 1,
      },
    });
    const blockcode = await fetchBlockcode({
      lat: nominatimRes.data[0].lat,
      lon: nominatimRes.data[0].lon,
    });
    const ispDataRes = await fetchIspData(blockcode.data.Block.FIPS);

    this.setState({ curAddress: nominatimRes.data[0].display_name, ispData: ispDataRes.data });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
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
