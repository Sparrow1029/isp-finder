import React from 'react';
import techcodes from '../utils/techcodes';

const IspTableRow = ({ entry }) => (
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
);

export default IspTableRow;
