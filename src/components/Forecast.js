import React from "react";
import Day from "./Day";
import PropTypes from 'prop-types';

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.weather);
	}

  render() {

    return (
		<ul className="forecast">    		
			<li><Day dayname="Tue" tmpMax="25" tmpMin="15" iconName="rainy-7" /></li>
			<li><Day dayname="Wed" tmpMax="25" tmpMin="15" iconName="cloudy-day-3" /></li>
			<li><Day dayname="Thu" tmpMax="25" tmpMin="5" iconName="cloudy-day-1" /></li>
			<li><Day dayname="Fri" tmpMax="25" tmpMin="15" iconName="cloudy-day-2" /></li>
			<li><Day dayname="Sat" tmpMax="5" tmpMin="15" iconName="cloudy-day-1" /></li>
			<li><Day dayname="Sun" tmpMax="25" tmpMin="15" iconName="day" /></li>
		</ul>
    );
  }
}

Forecast.propTypes = {
  weather: PropTypes.array
};

export default Forecast;

