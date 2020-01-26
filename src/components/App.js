import React, {Component} from "react"
import { BrowserRouter, Route } from "react-router-dom";
import TempView from './TempView';


class App extends Component{
    constructor(props){
        super(props)
        //declare state
        this.state = { latitude: null, longitude: null, errorMessage: '', pathName: ''}
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
            //check for which component to render
            if (this.state.pathName === "/temp") {
            return  ( <TempView 
                            currentLatitude={this.state.latitude}
                            currentLongitude={this.state.longitude}
                            />)
            }
            if (this.state.pathName ==="five day"){
                //return render 5 day component here
            }

        }
        return <div>loading...</div>

    }
    //necesary for react
    render() {
      return (
            <div>
                <button onClick={()=>{this.setState({pathName: "/temp"})}}>
                view current temperature
                </button>
                <button onClick={()=>{this.setState({pathName: "five-day"})}}>
                View 5 day
                </button>
                
                <BrowserRouter>
                    <div>
                        <Route 
                            path={this.state.pathName}
                            render={() => this.renderContent()}
                           />

                    </div>
                </BrowserRouter>
            </div>
            );
    }
   
}
export default App;