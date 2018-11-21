import React from "react";
import Icon from "./Icon";
import PropTypes from 'prop-types';

class Day extends React.Component {
  
  render() {
    function getDayName(dateString) {
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var d = new Date(dateString);
      var dayName = days[d.getDay()];
      return dayName;
    }
    return (
      <li className="dayBox">
        <div className="dayName">{getDayName(this.props.dayName)}</div>
        <Icon 
          image={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} 
          size={64}
          description={this.props.description}
        />
        <div className="tmpMax">{parseInt(this.props.tmpMax)}&deg;C</div>
        <div className="tmpMin">{parseInt(this.props.tmpMin)}&deg;C</div>
      </li>
    );
  }
}

Day.propTypes = {
  dayName: PropTypes.string,
  icon: PropTypes.string,
  tmpMax: PropTypes.number,
  tmpMin: PropTypes.number,
  description: PropTypes.string
  };

export default Day;
