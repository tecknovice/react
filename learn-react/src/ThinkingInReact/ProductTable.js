import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
export default class ProductTable extends React.Component {
    // constructor(props) {
    //     super(props);

    // }
    render() {
        const { PRODUCTS } = this.props;
        const rows = []
        let currentCategory = null;
        PRODUCTS.forEach(product => {
            if (product.category !== currentCategory) {
                rows.push(<ProductCategoryRow heading={product.category} key={product.category} />)
                currentCategory = product.category
            }
            rows.push(<ProductRow product={product} key={product.name} />)
        });
        console.log(rows)
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