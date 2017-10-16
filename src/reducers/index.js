import { combineReducers } from 'redux';
import ExchangeReducer from './reducer_exchange_rate';
const rootReducer = combineReducers({
  exchangeRates: ExchangeReducer
});

export default rootReducer;
