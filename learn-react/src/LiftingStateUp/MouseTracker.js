import React from 'react';
import cat from "./cat.png";
class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src={cat} alt="" style={{ zIndex:0, position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    render() {
        return (
            <div style={{ zIndex:1, height: '100vh' }} onMouseMove={this.props.onMouseMove}></div>
        );
    }
}

export default class MouseTracker extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    render() {
        return (
            <div>
                <h1 style={{ zIndex: -1, position: 'absolute', left: '50%' , top: '50%', transform: 'translate(-50%,-50%)' }}>Move the mouse around!</h1>
                <Mouse onMouseMove={this.handleMouseMove.bind(this)} />
                <Cat mouse={this.state} />
            </div>
        );
    }
}