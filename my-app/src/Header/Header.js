import React, { useState } from 'react';
import '../App.css';
import './Header.css';
import Burger from './Burger';
function Header() {
    let [burger, setBurger] = useState(false);
    //let brg;
    //burger ? brg = <Burger moveBurger={burger} setBurger={setBurger} /> : brg = <span></span>

    //Плавная прокрутка к якорю
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const blockID = anchor.getAttribute('href').substr(1);
            if (document.getElementById(blockID)) {
                e.preventDefault();

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    //--------------------------
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
                                <li><a href="#root">ГЛАВНАЯ</a></li>
                                <li><a href="#2">ОБ АВТОРЕ</a></li>
                                <li><a href="#3">РАБОТЫ</a></li>
                                <li><a href="#4">НАВЫКИ</a></li>
                                <li><a href="#5">КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <span className='burger-btn' onClick={() => setBurger(!burger)}><span></span></span>
                </div>
                <Burger moveBurger={burger} setBurger={setBurger} />
                <div className="header_frontend_main_container">
                    <div className='frontend_main_content'>
                        <div className="header_frontend_img">
                            <img src={require('./frontend.png')} alt="" />
                        </div>
                        <div className="frontend_contant">
                            <div className="frontend_contant_title">Разработка сайтов и приложений.</div>
                            <div className="frontend_contant_text">Разработаю сайт по всем современым методам. Прикреплю сайт к CMS и настрою. Доработаю и улучшу функционал вашего сайта. Сделаю адаптив.
                            </div>
                            <button className="frontend_contant_button"><a href="#5">НАПИСАТЬ МНЕ</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
