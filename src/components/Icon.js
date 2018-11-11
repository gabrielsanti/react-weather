import React from "react";
import "./Icon.css";
import DayImage from "../icons/day.svg"
import PropTypes from 'prop-types';

class Icon extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="icon">
        <img src={DayImage} 
          alt="Sunny day" 
          width={this.props.size}
          height={this.props.size}
        />
      </div>
    );
  }
}

Icon.propTypes = {
  size: PropTypes.number,
};

export default Icon;
