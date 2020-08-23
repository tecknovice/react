import React from "react";
export default class SearchBar extends React.Component {
    render() {
        const { filterText, handleFilterTextChange, inStockOnly, handleInStockChange } = this.props;
        return (
            <div>
                <input type="text" value={filterText} onChange={handleFilterTextChange} />
                <br />
                <input type="checkbox" checked={inStockOnly} onChange={handleInStockChange} /> Only show products in stock
            </div>
        );
    }
}