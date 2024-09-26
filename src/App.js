import * as React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import InformationBox from './component/InformationBox';
import WeatherForecastBox from './component/WeatherForecastBox';
import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const cityArray = ['Seoul', 'Paris', 'New York', 'Tokyo'];
  const [city, setCity] = useState('');
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    if (city) {
      getWeatherByCity(city);
    } else getCurrentLocation();
  }, [city]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          console.log('current location:', lat, lon);
          getCurrentWeatherByLocation(lat, lon);
          getCurrentAirPollution(lat, lon);
        },
        // if there was an error getting the users location
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  // ${process.env.REACT_APP_API_KEY}} c9792bc12eb95e4185894e1f54c03eb5
  const getCurrentWeatherByLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lan=fr&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lan=kr&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('city data', data);
    setWeatherData(data);
    setLoading(false);
    console.log('render');
  };
  const getCurrentAirPollution = async (lat, lon) => {
    let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('air pollution?', data);
  };

  return (
    <div>
      {/* 스타일 초기화 */}
      <Reset />
      {loading ? (
        <div className="loading-container">
          <ClipLoader />
        </div>
      ) : (
        <div className="container">
          <div className="weather-box">
            <WeatherBox weatherData={weatherData} />
          </div>
          <WeatherButton cityArray={cityArray} setCity={setCity} city={city} />
          <InformationBox weatherData={weatherData} />

          {city ? <WeatherForecastBox /> : <WeatherForecastBox />}
        </div>
      )}
    </div>
  );
}

export default App;
