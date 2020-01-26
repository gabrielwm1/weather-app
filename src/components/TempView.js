import React, {Component} from "react";

class TempView extends Component {
    constructor(props){
        super(props);

        //get current Date
        this.state= {date: new Date()}
    }
    render(){
        return(<div>{this.props.currentLatitude}</div>);
    }
}

export default TempView;