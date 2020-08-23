import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component {
    render() {
        const { PRODUCTS, filterText, inStockOnly } = this.props;
        const rows = []
        let currentCategory = null;
        let showProducts = PRODUCTS.filter(item => item.name.includes(filterText))
        if (inStockOnly) showProducts = showProducts.filter(item => item.stocked === true)
        showProducts.forEach(product => {
            if (product.category !== currentCategory) {
                rows.push(<ProductCategoryRow heading={product.category} key={product.category} />)
                currentCategory = product.category
            }
            rows.push(<ProductRow product={product} key={product.name} />)
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}