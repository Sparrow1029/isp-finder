import React from 'react';
import IspTableRow from './IspTableRow';

const IspTable = ({ ispData }) => {
  
  const renderedRows = ispData.map((entry) => (
    <IspTableRow
      entry={entry}
      key={entry.logrecno}
    />
  ));

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
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default IspTable;
