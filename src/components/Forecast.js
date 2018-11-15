import React from "react";
import Day from "./Day";
import PropTypes from 'prop-types';

class Forecast extends React.Component {
	constructor(props) {
		super(props);
		
	}

  render() {

    return (
		<ul className="forecast">
			{this.props.days.map((item, index) => (
				<li><Day dayname="Tue" tmpMax="{item.main.temp_max}" tmpMin="{item.main.temp_min}" iconName="{item.weather[0].icon}" /></li>
       
    	))}
		</ul>
    );
  }
}

Forecast.propTypes = {
  days: PropTypes.array
};

export default Forecast;

