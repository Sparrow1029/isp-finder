import React from 'react';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

const AppContainer = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

export default AppContainer;
