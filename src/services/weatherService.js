const API_KEY = 'bf26143dfea505b387b226006f5280e1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
        .then(res => res.json())
};

const formatCurrentWeather = data => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon };
}

const getFormattedWeatherData = (searchParams) => {
    const formattedCurrentWeather = getWeatherData('weather', searchParams).then(formatCurrentWeather)
}


export default getWeatherData;