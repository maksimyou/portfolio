import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
function Menu() {

    return (
        <div className="header_menu_constainer_to-do-list">
            <nav className="header_menu_list">
                <ul className="menu_list_content">
                    <li><Link to="/">НАЗАД НА ГЛАВНУЮ</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;


