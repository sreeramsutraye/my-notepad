import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-content">
                <div className="logo">
                    <span className="logo-icon">📝</span>
                    <h1>Notepad</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;