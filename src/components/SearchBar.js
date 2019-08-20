import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
  }

  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.search);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          onSubmit={this.onFormSubmit}
          action=""
          className="ui form"
        >
          <div className="field">
            <label>ISP Finder</label>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
