import axios from 'axios';

const API_KEY = '457e6bd49537cf18883befabaa273058';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    console.log('Request made', request);

    // Redux promise middleware resolves the promise we pass to the payload,
    // and returns the action as a resolved request.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}