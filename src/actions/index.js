import axios from 'axios';
import { FETCH_EXCHANGE } from './type';

const ROOT_URL = 'http://api.fixer.io';
const API_KEY = '?base=USD';

export function fetchExchangeRate() {
    const request = axios.get(`${ROOT_URL}/latest${API_KEY}`);
    return {
        type: FETCH_EXCHANGE,
        payload: request
    };
}