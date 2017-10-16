import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExchangeRate extends Component {
  componentDidMount() {
    console.log(this.props.fetchExchangeRate());
		// this.props.fetchExchangeRate();
	}
  render() {
    // console.log('fetchExchangeRate');
    return (
      <div>React Currency Exchange</div>
    );
  }
}

function mapStateToProps(state) {
  return {
		currency: state.exchangeRates
	}
}

export default connect (mapStateToProps, actions) (ExchangeRate);
