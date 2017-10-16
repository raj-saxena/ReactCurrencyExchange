import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExchangeRate extends Component {
  componentDidMount() {
    console.log(this.props.fetchExchangeRate());
		// this.props.fetchExchangeRate();
  }
  
  renderRates() {
    return _.map(this.props.rates, rate => {
      return (
      <li className="list-group-item" key={rate.symbols}>
        {rate.value}
      </li>
    );
  });
}

  render() {
    return (
      <div>
        <div>
          React Currency Exchange
        </div>
        <ul className="list-group">
          {this.renderRates()}
        </ul>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
		rates: state.exchangeRates
	}
}

export default connect (mapStateToProps, actions) (ExchangeRate);
