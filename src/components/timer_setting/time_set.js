import React from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import {AiOutlineSave} from 'react-icons/ai'

class SetTime extends React.Component {
    constructor(props){
        super(props);
        this.updateTime = this.updateTime.bind(this);
        this.state={
            h:0,
            m:0,
            s:0,
        };
        
    }

    render(){
        return (
            <Form>
                <h1> Настройки таймера</h1>
                <Form.Group className="mb-3">
                <Form.Label>Время </Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control onChange={(e)=>{this.setState({h: Math.floor(e.target.value)})}} type="number" min="0" placeholder="Часов" />
                        <Form.Control onChange={(e)=>{this.setState({m: Math.floor(e.target.value)})}} type="number" min="0" max="59" placeholder="Минут" />
                        <Form.Control onChange={(e)=>{this.setState({s: Math.floor(e.target.value)})}} type="number" min="0" max="59" placeholder="Секунд" />
                    </InputGroup>
                    <Form.Text className="text-muted">
                        Настройте время таймера
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" onClick={this.updateTime}><AiOutlineSave /> Сохранить</Button>
            </Form>
        )
    }
    updateTime(){
        let t = this.state.h*3600+this.state.m*60+this.state.s
        this.props.onSetTime(t);
    }
}

export default SetTime;