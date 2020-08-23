import React from "react";
import "./style.css"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PRODUCTS: [
                { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
                { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
                { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
                { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
                { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
                { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
            ]
        }
    }
    render() {
        return (<div className="table">
            <SearchBar />
            <ProductTable PRODUCTS={this.state.PRODUCTS}/>
        </div>);
    }
}