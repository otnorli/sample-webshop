import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.add_to_cart = this.add_to_cart.bind(this);
    }
    add_to_cart(product) {
        this.props.add_to_cart(product);
    }
    render() {
        const {
            cart = [],
            total_price = 0,
            currency = '',
        } = this.props;

        return (
            <div>
                <div>
                    { cart.map((product, index)=> <div className="row">
                        <div className="col-md-3">
                            { product.name }
                        </div>

                        <div className="col-md-3">
                            { product.price }
                        </div>

                        <div className="col-md-3">
                            { product.currency }
                        </div>

                        <div className="col-md-3">
                            <button onClick={ () => this.add_to_cart(product) }>
                                Fjern
                            </button>
                        </div>
                    </div> )}
                </div>

                <div className="row">
                    <div className="col-md-3">
                        Total
                    </div>

                    <div className="col-md-3">
                        <u>
                            { total_price }
                        </u>
                    </div>

                    <div className="col-md-3">
                        { currency }
                    </div>

                    <div className="col-md-3">
                        -
                    </div>
                </div>

                <br />

                <button className="cart__button">
                    Send inn bestilling
                </button>
            </div>
        );
    }
}

Cart.propTypes = {
    cart:        PropTypes.array.isRequired,
    total_price: PropTypes.number.isRequired,
    currency:    PropTypes.string.isRequired,
    add_to_cart: PropTypes.func.isRequired,
};

export default Cart;
