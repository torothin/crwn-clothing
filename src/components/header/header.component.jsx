import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector'

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/crwn-clothing/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/crwn-clothing/shop'>
                SHOP
            </Link>
            <Link className='option' to='/crwn-clothing/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/crwn-clothing/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : 
            <CartDropdown />
        }
    </div>
)

// one way to do this but cleaner method below
// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state),
// })

// createStructuredSelector used when many selectors are used. Automatically passes in
// state to reduce reused code
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);