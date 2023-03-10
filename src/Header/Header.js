import { useState } from 'react';
import './Header';
import './Header.css';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

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
                //console.dir(document.getElementById(blockID));
                //document.getElementById(blockID).scrollIntoView({
                //    behavior: 'smooth',
                //    block: 'center'
                //});
                if (document.getElementById(blockID).id == 'root') {
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                } else {

                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });

                }

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
                    <Menu />
                    <span className={burger ? 'burger-btn burger-active' : 'burger-btn'} onClick={() => setBurger(!burger)}><span></span></span>
                </div>
                <Burger moveBurger={burger} setBurger={setBurger} />
            </div>
        </div >
    );
}

export default Header;
