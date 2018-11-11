import React from "react";
import Icon from "./Icon";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="box">
      	<div className="today">
      		<Icon />
      	</div>
      	<div className="forecast">
      		<div className="day"><Icon /></div>
      		<div className="day"><Icon /></div>
      		<div className="day"><Icon /></div>
      		<div className="day"><Icon /></div>
      		<div className="day"><Icon /></div>
      	</div>
     
      </div>
    );
  }
}
export default App;
