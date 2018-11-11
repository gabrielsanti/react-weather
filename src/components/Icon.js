import React from "react";
import "./Icon.css";
import DayImage from "../icons/day.svg"

class Icon extends React.Component {
  constructor(props) {
    super(props);
    console.log(DayImage);
  }


  render() {
    return (
      <div className="icon">
        <img src={DayImage} alt="Sunny day" width="64" height="64"/>
      </div>
    );
  }
}
export default Icon;
