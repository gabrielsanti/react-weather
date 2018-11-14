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
    error: undefined
  }

  //getWeather is a method we'll use to make the api call
  getWeather = async () => {

    const city = 'Castelfidardo'
    const country = 'Italy'; 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
    if (city && country ){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
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
    return (
      <div className="box">
      	<Today />
      	<Forecast />
     
      </div>
    );
  }
}
export default App;
