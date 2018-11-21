import React from "react";
import Day from "./Day";
import PropTypes from 'prop-types';

class Forecast extends React.Component {

	render() {
		return (
			!!this.props.forecast && this.props.forecast.map((fc, i) => (
				<Day 
					dayName={fc.dt_txt}
					icon={fc.weather[0].icon}
					description={fc.weather[0].description}
					tmpMax={fc.main.temp_max}
					tmpMin={fc.main.temp_min}
					key={i}
				/>
				))
			);
	};
}

Forecast.propTypes = {
  forecast: PropTypes.array
  };

export default Forecast;

