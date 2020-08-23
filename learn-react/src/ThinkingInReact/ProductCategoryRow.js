import React from "react";
export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2">{this.props.heading}</td>
            </tr>
        );
    }
}