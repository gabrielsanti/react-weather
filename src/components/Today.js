import React from "react";
import Icon from "./Icon";
import PropTypes from 'prop-types';

class Today extends React.Component {

  render() {
    console.log(this.props.dayname)
    return (
      <div className="today">
        <div className="location">
          <span>Castelfidardo</span>
          <span>Wheather</span>
        </div>
        <Icon size="128"/>
        <div className="tmpCurrent">
          <span>20&deg;C</span>
          <span>Sunny</span>            
        </div>
      </div>
    );
  }
}

Today.propTypes = {
  dayName: PropTypes.string,
  iconName: PropTypes.string,
  tmpMax: PropTypes.number,
  tmpMin: PropTypes.numberv
};

export default Today;
