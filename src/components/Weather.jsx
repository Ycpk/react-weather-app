import React, { Component } from "react";

class Weather extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          {this.props.temperature && (
            <li>Temperature: {this.props.temperature}</li>
          )}
          {this.props.city &&
            this.props.country && (
              <li>
                Location: {this.props.city},{this.props.country}
              </li>
            )}
          {this.props.humidity && <li>humidity: {this.props.humidity}</li>}
          {this.props.description && (
            <li>description: {this.props.description}</li>
          )}
          {this.props.error && <li>error: {this.props.error}</li>}
        </ul>
      </div>
    );
  }
}

export default Weather;
