import React from "react"
import Button from 'react-bootstrap/Button'

class MainTimerUI extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        }
    }
    render(){
        return (
            <div className="timer_ui">
                <Button variant="primary" value='Начать' onClick={()=>{this.props.toStart()}}> Начать </Button>
                
            </div>
        )
    }

}

export default MainTimerUI;