import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state ={
    term: ''
};

  searchValueChange = (e) => {
    const term = e.target.value;
    this.setState ( { term } );
    this.props.searchValueChange(term);
  };

  render() {
    return (
      <form className="item-add-form d-flex">
        <input type="text"
                  className="form-control search-input"
                  onChange={this.searchValueChange}
                  placeholder="type to search" 
                  value={this.state.term} />
      </form>
    )
  }
}