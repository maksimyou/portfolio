import React, { useState } from 'react';
import '../App.css';
import './Header.css';
import Burger from './Burger';
function Header() {
    let [burger, setBurger] = useState(false);
    let brg;
    burger ? brg = <Burger moveBurger={burger} setBurger={setBurger} /> : brg = <span></span>
    return (
        <div className="header_container">
            <div className="header_fronta_container">
                <div className="header_content">
                    <div className="header_logo">
                        <div className="logo_content">AM</div>
                    </div>
                    <div className="header_menu_constainer">
                        <nav className="header_menu_list">
                            <ul className="menu_list_content">
                                <li><a href="/#">ГЛАВНАЯ</a></li>
                                <li><a href="/#">ОБ АВТОРЕ</a></li>
                                <li><a href="/#">РАБОТЫ</a></li>
                                <li><a href="/#">ПРОЦЕСС</a></li>
                                <li><a href="/#">КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <span className='burger-btn' onClick={() => setBurger(!burger)}><span></span></span>
                </div>
                {brg}
                <div className="header_frontend_main_container">
                    <div className='frontend_main_content'>
                        <div className="header_frontend_img">
                            <img src={require('./frontend.png')} alt="" />
                        </div>
                        <div className="frontend_contant">
                            <div className="frontend_contant_title">Дизайн и верстка</div>
                            <div className="frontend_contant_text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI
                                века.
                            </div>
                            <button className="frontend_contant_button"><a href="http://#5">НАПИСАТЬ МНЕ</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
