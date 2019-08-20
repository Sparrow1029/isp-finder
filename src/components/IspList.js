import React from 'react';
import { fetchBlockcode, fetchIspData } from '../apis/fcc';
import techcodes from '../utils/techcodes';

const location = { lat: 37.3326452, lon: -122.029912965894 };

class IspList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { block: '060855081012002', ispData: [] };
  }

  componentDidMount() {
    this.getISPs(this.state.block);
  }

  getBlock = async () => {
    const response = await fetchBlockcode(location);
    this.setState({
      block: response.data.Block.FIPS,
    });
  };

  getISPs = async () => {
    const response = await fetchIspData(this.state.block);
    this.setState(
      {
        ispData: response.data,
      },
      () => this.getBlock(),
    );
  };

  renderList() {
    return this.state.ispData.map((entry) => (
      <tr key={entry.logrecno}>
        <td>{entry.dbaname}</td>
        <td>{entry.consumer === '1' ? 'yes' : 'no'}</td>
        <td style={{ textAlign: 'right' }}>
          {entry.maxaddown}
          {' '}
Mbps
        </td>
        <td style={{ textAlign: 'right' }}>
          {entry.maxadup}
          {' '}
Mbps
        </td>
        <td style={{ textAlign: 'right' }}>{techcodes[entry.techcode]}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="ui single line table unstackable">
          <thead>
            <tr>
              <th>DBA Name</th>
              <th>Consumer</th>
              <th style={{ textAlign: 'right' }}>Max DL</th>
              <th style={{ textAlign: 'right' }}>Max UL</th>
              <th style={{ textAlign: 'right' }}>Service Type</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default IspList;
