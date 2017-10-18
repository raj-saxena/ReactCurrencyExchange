import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExchangeRate extends Component {
  componentDidMount() {
    this.props.fetchExchangeRate();
  }
  
  renderRates() {
    const rates = this.props.rates[0];
      if(!rates) {
        return 'Fetching data';
      }
      
      console.log('rates', rates.rates);
      return _.map(rates.rates, (key, value) => {
        console.log(key + "->" + value);
        return (
        <li className="list-group-item" key={key}>
          {key}  {value}
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
