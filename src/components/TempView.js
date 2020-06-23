import React, { Component } from 'react';
import axios from 'axios';
import * as firebase from 'firebase';
class TempView extends Component {
  constructor(props) {
    super(props);

    //get current Date
    this.state = {
      speed: 19,
      tempCelcius: 8
    };
  }

  convertToCelcius = temp => {
    let degreesCelcius = temp - 273.15;
    console.log(degreesCelcius);
    let roundedTemp = Math.round(degreesCelcius); // degreesCelcius.round()
    return roundedTemp;
  };
  //function where I make my request to the Weather API
  getCurrentWeather = async (latitude, longitude) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=6d523400c8422fcf2d24254b7fc53582`,
      {}
    );
    //test to see what I get back in my console
    console.log(response.data.main.temp);

    //update state with new temperature and convert to celcius
    this.setState({
      tempCelcius: this.convertToCelcius(response.data.main.temp)
    });

    // write to the firebase database
    const rootRef = firebase
      .database()
      .ref()
      .child('react');

    const tempRef = rootRef.child('temp');
    tempRef.set({
      temp: this.state.tempCelcius
    });
  };

  //component lifecylce method
  componentDidMount() {
    //make API request when component renders
    this.getCurrentWeather(
      this.props.currentLatitude,
      this.props.currentLongitude
    );
  }
  // rootRef.set({ temp: this.state.tempCelcius });

  render() {
    return (
      <div>
        <h1>your temperature:</h1>
        {/* <h1>{this.state.speed}</h1> */}
        <h1>{this.state.tempCelcius} celcius</h1>
      </div>
    );
  }
}

export default TempView;
