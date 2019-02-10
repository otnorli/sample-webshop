import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cart.css'

class Cart extends Component {
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
                        <div className="col-md-6">
                            { product.name }
                        </div>

                        <div className="col-md-3">
                            { product.price }
                        </div>

                        <div className="col-md-3">
                            { product.currency }
                        </div>
                    </div> )}
                </div>

                <div className="row">
                    <div className="col-md-6">
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
};

export default Cart;
