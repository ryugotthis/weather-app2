import React from 'react';

const WeatherBox = ({ weatherData }) => {
  console.log('Box data?:', weatherData);
  return (
    <div>
      <div className="city-name">{weatherData?.name}</div>
      <ul className="temp-box">
        <li className="description">
          {/* img url도 패치를 해야 하지 않을까..? */}
          <img
            className="weather-icon"
            src={
              weatherData
                ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                : ''
            }
          />
          <h2 className="temp-description">
            {weatherData?.weather[0].description}
          </h2>
        </li>
        <li className="temp">{`${weatherData?.main['temp']}°`}</li>
      </ul>
    </div>
  );
};

export default WeatherBox;
