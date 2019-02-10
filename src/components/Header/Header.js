import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css'
import {
    Cart,
} from '../'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, };
        this.show_header = this.show_header.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.cart.length === 0 && this.state.show){
            this.setState({ show: false, });
        }
    }

    show_header() {
        this.setState({ show: !this.state.show, });
    }

    render() {
        const {
            cart = [],
            add_to_cart,
        } = this.props;

        var total_price = 0;
        for (var i = 0; i < cart.length; i++) {
            total_price += cart[i].price;
        }

        var currency = 'NOK'; // TODO: Handle

        return (
            <div className="shop__header">
                <h1>
                    Faro Nettbutikk
                </h1>

                <div className="shop__checkout">
                    { cart.length > 0 && <button
                        onClick={ () => this.show_header() }
                        className="shop__checkout__button "
                    >
                        Sjekk ut
                    </button> }

                    { this.state.show && <Cart
                        cart={ cart }
                        add_to_cart={ add_to_cart }
                        total_price={ total_price }
                        currency={ currency }
                    />}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    cart: PropTypes.array.isRequired,
    add_to_cart: PropTypes.func.isRequired,
};

export default Header;
