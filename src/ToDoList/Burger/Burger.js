import './Burger.css';
import { Link } from 'react-router-dom';
function Burger({ moveBurger, setBurger }) {
    return (
        <div className={moveBurger ? "header_menu_container_burger active" : "header_menu_container_burger"}>
            < nav className="header_menu_list_burger" >
                <ul className="menu_list_content_burger">
                    <li><Link to="/">НАЗАД НА ГЛАВНУЮ</Link></li>

                </ul>
            </nav >
            <span className='close_burger' onClick={() => setBurger(!moveBurger)}><img src={require('./pngwing.png')} /></span>
        </div >);

}

export default Burger;
