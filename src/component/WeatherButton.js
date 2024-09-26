import React from 'react';
import { useState } from 'react';
import { FaMap } from 'react-icons/fa';
import { BsPinMapFill } from 'react-icons/bs';
const WeatherButton = ({ cityArray, setCity, city }) => {
  return (
    <div className="weather-button">
      <a
        className="map"
        onClick={() => {
          setCity('');
        }}
      >
        <BsPinMapFill className="map-icon" />
      </a>
      {cityArray.map((item, index) => (
        <button
          className={`btn ${city === item ? 'clicked' : ''}`}
          key={index}
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
