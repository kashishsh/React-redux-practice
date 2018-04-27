import axios from 'axios';

const API_KEY = 'dcf4382cdb398d855032c2f71f258934';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeahter(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
