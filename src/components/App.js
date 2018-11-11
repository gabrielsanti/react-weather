import React from "react";
import Icon from "./Icon";
import Day from "./Day";
import "./App.css";

class App extends React.Component {
  
  render() {
    return (
      <div className="box">
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
      	<ul className="forecast">    		
      		<li><Day dayname="Tue" tmpMax="25" tmpMin="15" iconName="rainy-7" /></li>
      		<li><Day dayname="Wed" tmpMax="25" tmpMin="15" iconName="cloudy-day-3" /></li>
      		<li><Day dayname="Thu" tmpMax="25" tmpMin="5" iconName="cloudy-day-1" /></li>
      		<li><Day dayname="Fri" tmpMax="25" tmpMin="15" iconName="cloudy-day-2" /></li>
      		<li><Day dayname="Sat" tmpMax="5" tmpMin="15" iconName="cloudy-day-1" /></li>
      		<li><Day dayname="Sun" tmpMax="25" tmpMin="15" iconName="day" /></li>
      	</ul>
     
      </div>
    );
  }
}
export default App;
