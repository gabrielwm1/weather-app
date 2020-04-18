import React, {Component} from "react"
import { BrowserRouter, Route } from "react-router-dom";
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
    renderTempViewContent(){
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            //Render Temp View Component Here
            <TempView  
                    currentLatitude={this.state.latitude}
                    currentLongitude={this.state.longitude}
                    />
            
        }
        return <div>loading...</div>

    }

    renderFiveDayContent(){
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            //render Five Day component Here
            
        }
        return <div>loading...</div>

    }
    }
    //necesary for react
    render() {
      return (
            <div>
                <BrowserRouter>            
                    <div>
                        <Route 
                            path={"/temp"}
                            render={() => this.renderTempViewContent()}
                           />
                        <Route 
                            path={"/five-day"}
                            render={() => this.renderFiveDayContent()}
                           />

                    </div>
                </BrowserRouter>
            </div>
            );
    }
   
}
export default App;