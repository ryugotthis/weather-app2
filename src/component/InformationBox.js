import React from 'react';

const InformationBox = ({ weatherData }) => {
  return (
    <div className="information-container">
      <h1>Information</h1>
      <div className="information-box">
        <div className="left">
          <img
            src={
              weatherData
                ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
                : ''
            }
          />
          <p>{weatherData?.weather[0].description}</p>
        </div>
        <ul className="right">
          <li>
            <span className="key">wind chill</span>
            <span className="value">{weatherData?.main.feels_like}°</span>
          </li>
          <li>
            <span className="key">Humidity</span>
            <span className="value">{weatherData?.main.humidity}%</span>
          </li>
          <li>
            <span className="key">Pressure</span>
            <span className="value">{weatherData?.main.pressure}hPa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InformationBox;
