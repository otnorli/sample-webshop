import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);

        this.in_cart = this.in_cart.bind(this);
        this.add_to_cart = this.add_to_cart.bind(this);
    }
    in_cart() {
        var index = this.props.cart.findIndex(x => x.id === this.props.product.id);
        return index !== -1;
    }
    add_to_cart() {
        this.props.add_to_cart(this.props.product);
    }
    scroll_top() {
        window.scrollTo(0,0);
    }
    render() {
        const {
            name = '',
            price = 0,
            url = '',
            currency = '',
        } = this.props.product;

        return (
            <div className="product">
                <img
                    className="product__image"
                    src={ url }
                    alt="Bilde mangler"
                />

                <span>
                    { name }
                </span>

                <br />

                <span>
                    Nå: { price + ' ' + currency }
                </span>

                <br />

                <span>
                    Før:
                    <strike>
                        { 12 * price +  ' ' + currency }
                    </strike>
                </span>

                <br />

                { !this.in_cart() && <button className="product_add" onClick={ () => this.add_to_cart() }>
                    Legg i handlekurv
                </button> }

                { this.in_cart() && <Fragment>
                    <button className="product_add product_added" onClick={ () => this.add_to_cart() }>
                        Lagt til
                    </button>

                    <a onClick={ () => this.scroll_top() }>
                        Til handlekurv
                    </a>
                </Fragment> }
            </div>
        );
    }
}

Product.propTypes = {
    product:     PropTypes.object.isRequired,
    cart:        PropTypes.array.isRequired,
    add_to_cart: PropTypes.func.isRequired,
};

export default Product;
