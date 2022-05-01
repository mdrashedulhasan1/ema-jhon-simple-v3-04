import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='header-container'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;