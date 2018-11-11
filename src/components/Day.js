import React from "react";
import Icon from "./Icon";
import PropTypes from 'prop-types';

class Day extends React.Component {

  render() {
    console.log(this.props.dayname)
    return (
      <div className="dayBox">
        <div className="dayname">{this.props.dayname}</div>
        <Icon name={this.props.iconName} size="64" />
        <div className="tmpMax">{this.props.tmpMax}&deg;C</div>
        <div className="tmpMin">{this.props.tmpMin}&deg;C</div>
      </div>
    );
  }
}

Day.propTypes = {
  dayName: PropTypes.string,
  iconName: PropTypes.string,
  tmpMax: PropTypes.number,
  tmpMin: PropTypes.numberv
};

export default Day;
