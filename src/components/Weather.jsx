import React, { Component } from "react";

const Weather = props => (
  <div className="weather__info">
    <ul>
      {props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value">{props.temperature}</span>
        </p>
      )}
      {props.city &&
        props.country && (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {props.city},{props.country}
            </span>
          </p>
        )}
      {props.humidity && (
        <p className="weather__key">
          humidity:
          <span className="weather__value"> {props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          description:
          <span className="weather__value">{props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__key"> {props.error}</p>}
    </ul>
  </div>
);

export default Weather;
