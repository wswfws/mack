import React from "react"
import SetTime from "./time_set";

class TimerSetting extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <SetTime onSetTime={this.props.onSetTime}/>
        )
    }
}

export default TimerSetting;