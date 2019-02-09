import React, { Component } from 'react';
import Content from './content/Content';

class List extends React.Component{

	constructor(){
        super();
        this.state = {
            messages: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
   }

    updateMessage() {
        this.setState({
            messages: "my friend (from changed state)!"
        });
    }    

    render() {
        return (
        	<div>
        <h1>Hello {this.state.messages}!</h1>
        <button onClick={this.updateMessage}>Click me!</button>
        
        <Content />
        </div>
        )
    }


}
export default List;