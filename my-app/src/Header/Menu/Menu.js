import React from 'react';
import './Menu.css';
function Menu() {

    return (
        <div className="header_menu_constainer">
            <nav className="header_menu_list">
                <ul className="menu_list_content">
                    <li><a href="#root">ГЛАВНАЯ</a></li>
                    <li><a href="#2">ОБ АВТОРЕ</a></li>
                    <li><a href="#3">РАБОТЫ</a></li>
                    <li><a href="#4">НАВЫКИ</a></li>
                    <li><a href="#6">ПРОЕКТЫ</a></li>
                    <li><a href="#5">КОНТАКТЫ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;


