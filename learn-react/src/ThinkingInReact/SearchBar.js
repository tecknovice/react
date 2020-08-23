import React from "react";
export default class SearchBar extends React.Component {
    render() {
        const { filterText, onFilterTextChange, inStockOnly, onInStockChange } = this.props;
        return (
            <div>
                <input type="text" value={filterText} onChange={onFilterTextChange} />
                <br />
                <input type="checkbox" checked={inStockOnly} onChange={onInStockChange} /> Only show products in stock
            </div>
        );
    }
}