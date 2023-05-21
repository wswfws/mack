import React from "react"
import MainTimerUI from "./circle_use/main";
import TimerSetting from "./timer_setting/main";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.startTime = new Date().getTime();
        this.state={
            time:0,
            all_time:60,
        }
        this.timeChange = this.timeChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.setTime = this.setTime.bind(this);
    }

    timeConvert(t){
        let time = '';
        let sec = t%60;
        sec = sec < 10 ? '0'+sec : ''+sec;
        time+=sec
        if (t>=60){
            let min = Math.floor(t/60)%60;
            min = min < 10 ? '0'+min : ''+min;
            time = ''+min+':'+time
        }
        if (t>=3600){
            let hour = Math.floor(t/3600);
            hour = hour < 10 ? '0'+hour : ''+hour;
            time = ''+hour+':'+time
        }
        return time;
    }
    render() {
        let time = Math.floor(this.state.time);
        return (
            <div className="timer">
                <CircularProgressbarWithChildren className='circle' value={this.state.time/this.state.all_time*100} >
                    <h1 className="time">{this.timeConvert(time)}</h1><h3>{this.timeConvert(this.state.all_time)}</h3>
                </CircularProgressbarWithChildren>
                <MainTimerUI className='mainTimerUI' toStart = {this.startTimer}/>
                <TimerSetting onSetTime={this.setTime}/>
            </div>
        )
    }
    timeChange(){
        let time = new Date().getTime();
        let d_seconds = (time - this.startTime)/1000;
        this.setState({time:d_seconds});
    }
    stopTimer(){
        this.setState({time:0});
        if (this.interval){
            clearInterval(this.interval);
        }
    }
    startTimer(){
        this.stopTimer();
        console.log('startTimer');
        this.startTime = new Date().getTime();
        this.interval = setInterval(this.timeChange, 100);
    }
    setTime(t){
        this.stopTimer();
        this.setState({all_time:t});
    }

}

export default Timer