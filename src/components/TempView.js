import React, {Component} from "react";
import axios from 'axios';

class TempView extends Component {
    constructor(props){
        super(props);

        //get current Date
        this.state= {date: new Date()}

    }

    //function where I make my request to the Weather API
    getCurrentWeather = async (latitude, longitude) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=6d523400c8422fcf2d24254b7fc53582`, {});
    //test to see what I get back in my console
        console.log(response)
    }

    //component lifecylce method
    componentDidMount(){
    //make API request when component renders
        this.getCurrentWeather(this.props.currentLatitude, this.props.currentLongitude);
    }
    render(){
        return(<div>{this.props.currentLatitude}</div>);
    }
}

export default TempView;