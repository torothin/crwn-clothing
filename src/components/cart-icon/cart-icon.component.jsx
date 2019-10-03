import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


// this is a selector because we get the entire state then take a slice of it =>
// everytime cart/state is updated then mapStateToProps is called => reduce is called
// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     itemCount: cartItems.reduce( 
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//         0
//     )
// });

// updated using reselect to "memoize" this selector
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);