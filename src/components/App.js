import React from "react";
import Today from "./Today"
import Forecast from "./Forecast";
import "./App.css";

const Api_Key = '5c50080aa56953849755237b005e9f6f';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    forecast: undefined,
  }

  //getWeather is a method we'll use to make the api call
  getWeather = async () => {

    const city = 'Castelfidardo'
    const country = 'Italy'; 

    // Current weather api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
    const response = await api_call.json();

    // Forecast weather api call
    const forecast_api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&cnt=6&appid=${Api_Key}`);
    const forecast_response = await forecast_api_call.json();

    if (city && country){
      // Remove the first element of the forecast (current day)
      forecast_response.list.shift();

      // Set state with api responses
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].main,
        icon: response.weather[0].icon,
        forecast: forecast_response.list,        
        error: ""
      })
      
    } else {
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  componentDidMount = () => {
    this.getWeather();
  }
  
  render() {
    if(this.state.temperature) {
      return (
        <div className="box">
          <Today 
            temperature={this.state.temperature} 
            city={this.state.city} 
            country={this.state.country} 
            description={this.state.description} 
            icon={this.state.icon} 
          />
          <ul className="forecast"><Forecast forecast={this.state.forecast} /></ul>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default App;
