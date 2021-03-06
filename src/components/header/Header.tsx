import React from 'react';
import { ReactComponent as Search } from '../../assets/images/svg/search.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="d-flex justify-content-between align-items-center py-3">
            <span className="header--subscribe">Subscribe</span>
            <h1 className="header--title">NewsWeb</h1>
            <div className="d-flex align-items-center">
                <Search className="mx-3" />
                <button className="header--signup">Sign up</button>
            </div>
        </header>
    );
};

export default Header;
