import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Product,
} from '../'

class Products extends Component {
    render() {
        var {
            products = [],
            chunk_size = 4, // Products per row
            cart = [],
            add_to_cart,
        } = this.props;

        if (chunk_size > 4 || chunk_size < 1) {
            // Max chunk size = 4 and min chunk size 1
            chunk_size = 4;
        }

        // Bootstrap MD column size
        var grid_size = parseInt(12 / chunk_size);

        var chunked_products = [];
        for (var i = 0; i < products.length; i += chunk_size) {
            chunked_products.push(products.slice(i, i + chunk_size));
        }

        return (
            <div>
                { chunked_products.map((products, index1)=> <div key={ index1 } className="row">
                    { products.map((product, index2)=> <div key={ index1 + '_' + index2 } className={ 'col-md-' + grid_size }>
                        <Product
                            product={ product }
                            cart={ cart }
                            add_to_cart={ add_to_cart }
                        />
                    </div>)}
                </div> )}
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    chunk_size: PropTypes.number,
    add_to_cart: PropTypes.func.isRequired,
};

export default Products;
