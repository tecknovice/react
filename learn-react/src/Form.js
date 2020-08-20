import React from "react";
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'text' };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}