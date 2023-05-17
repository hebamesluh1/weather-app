import axios from "axios";
import { useState } from 'react';

//components
import City from "./components/City"
import Weather from "./components/Weather"

//api
import { WEATHER_API_URL, WEATHER_API_KEY } from './api/api'

//style
import { AppLabel } from "./global/component"

function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [loading, setLoading] = useState(false);


  //fetch data from api 
  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.get(`${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}`).catch((e) => console.log(e)).finally(() => setLoading(false));

    if (res) {
      updateWeather(res.data);
    }
  }


  return (
    <div className="app">
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <Weather weather={weather} />
      )
        : (
          <City updateCity={updateCity} fetchWeather={fetchWeather} loading={loading} />
        )}
    </div>
  )
}

export default App
