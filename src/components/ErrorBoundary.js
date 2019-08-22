import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2 className="ui header red">Oh no something went wrong!</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
