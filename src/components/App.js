import React, {Component} from "react"
import TempView from './TempView';

class App extends Component{
    constructor(props){
        super(props)
        //declare state
        this.state = { latitude: null, longitude: null, errorMessage: ''}
        //bind functions

        //get a user's current location
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState({ 
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            err=> {
                console.log("not working");
                this.setState({ errorMessage: err.message })
            }
        );
    }
    //conditional rendering of content with error handling
    renderContent(){
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return  ( <TempView 
                            currentLatitude={this.state.latitude}
                            currentLongitude={this.state.longitude}
                            />)
        }
        return <div>loading...</div>

    }
    //necesary for react
    render() {
      return <div>{this.renderContent()}</div>
    }
   
}
export default App;