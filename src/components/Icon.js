import React from "react";
import "./Icon.css";
import PropTypes from 'prop-types';

class Icon extends React.Component {
  render() {
    return (
      <div className="icon">
        <img 
          src={this.props.image} 
          alt={this.props.description} 
          width={this.props.size}
          height={this.props.size}
        />
      </div>
    );
  }
}

Icon.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Icon;
