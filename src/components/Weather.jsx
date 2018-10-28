import React, { Component } from "react";

const Weather = props => (
  <div>
    <ul>
      {props.temperature && <li>Temperature: {props.temperature}</li>}
      {props.city &&
        props.country && (
          <li>
            Location: {props.city},{props.country}
          </li>
        )}
      {props.humidity && <li>humidity: {props.humidity}</li>}
      {props.description && <li>description: {props.description}</li>}
      {props.error && <li>error: {props.error}</li>}
    </ul>
  </div>
);

export default Weather;
