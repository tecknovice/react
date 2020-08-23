import React from "react";
import { PRODUCTS } from "./products"
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false }
    }
    handleFilterTextChange(event) {
        this.setState({ filterText: event.target.value })
    }
    handleInStockChange(event) {
        this.setState({ inStockOnly: event.target.checked })
    }
    render() {
        const { filterText, inStockOnly } = this.state;
        return (
            <div style={{ padding: '10px' }}>
                <SearchBar
                    filterText={filterText}
                    handleFilterTextChange={this.handleFilterTextChange.bind(this)}
                    inStockOnly={inStockOnly}
                    handleInStockChange={this.handleInStockChange.bind(this)} />
                <ProductTable
                    PRODUCTS={PRODUCTS}
                    filterText={filterText}
                    inStockOnly={inStockOnly} />
            </div>
        );
    }
}