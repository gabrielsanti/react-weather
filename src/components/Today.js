import React from "react";
import Icon from "./Icon";
import PropTypes from 'prop-types';

class Today extends React.Component {

  render() {
    return (
      <div className="today">
        <div className="location">
          <span>{this.props.city}</span>
          <span>Wheather</span>
        </div>
        <Icon 
          image={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} 
          size={64}
          description={this.props.description}
        />
        <div className="tmpCurrent">
          <span>{parseInt(this.props.temperature)}&deg;C</span>
          <span>{this.props.description}</span>            
        </div>
      </div>
    );
  }
}

Today.propTypes = {
  city: PropTypes.string,
  icon: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string
};

export default Today;
