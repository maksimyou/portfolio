import { useState } from 'react';
import './Header.css';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

function Header() {
    let [burger1, setBurger1] = useState(false);
    return (
        <div className="header_container">
            <div className="header_fronta_container">
                <div className="header_content">
                    <div className="header_logo">
                        <div className="logo_content">AM</div>
                    </div>
                    <Menu />
                    <span className='burger-btn' onClick={() => setBurger1(!burger1)}><span></span></span>
                </div>
                <Burger moveBurger={burger1} setBurger={setBurger1} />
            </div>
        </div >
    );
}

export default Header;
