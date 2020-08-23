import React from "react";
export default class SearchBar extends React.Component{
    render(){
        return (<div>
            <input type="text"/>
            <br/>
            <input type="checkbox"/> Only show products in stock
        </div>);
    }
}