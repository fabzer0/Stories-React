import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import Button from './Button';

class SearchStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { query } = this.state;

    if (query) {
      this.props.onFetchStories(query)
      this.setState({ query: '' });
    }
    e.preventDefault();
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type='submit'>
          Search
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
