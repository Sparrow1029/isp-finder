import React from 'react';

const ErrorMessage = ({ error }) => {
  if (error === null) {
    return null;
  }
  return (
    <div className="ui message red">
      Sorry, no results. Try being either more (or less) specific.
    </div>
  );
};

export default ErrorMessage;
