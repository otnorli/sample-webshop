import React, { Component } from 'react';
import {
    Header,
    Products,
} from '../'
import { products } from './products'
import './Shop.css'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            search: '',
        };
        this.add_to_cart = this.add_to_cart.bind(this);
        this.search = this.search.bind(this);
    }

    search(evt) {
        this.setState({ search: evt.target.value, });
    }

    add_to_cart(product) {
        var id = product.id;
        var cart = this.state.cart;
        var cart_index = cart.findIndex(x => x.id === id);
        if (cart_index === -1) {
            // Add to cart
            cart.push(product);
        } else {
            // Remove from cart
            cart.splice(cart_index, 1);
        }

        this.setState({ cart: cart, });
    }

    render() {
        var filtered_products = products.filter(
            product => this.state.search === '' || product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );

        return (
            <div className="container">
                <Header
                    cart={ this.state.cart }
                />

                <div className="shop__search">
                    <input onChange={ this.search }
                           className="shop__input"
                           placeholder="Søk etter produkt"
                    />
                </div>

                <Products
                    add_to_cart={ this.add_to_cart }
                    cart={ this.state.cart }
                    products={ filtered_products }
                />
            </div>
        );
    }
}

export default Shop;
