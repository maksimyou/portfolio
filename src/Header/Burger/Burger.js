import './Burger.css';
function Burger({ moveBurger, setBurger }) {
    return (
        <div className={moveBurger ? "header_menu_container_burger active" : "header_menu_container_burger"}>
            < nav className="header_menu_list_burger" >
                <ul className="menu_list_content_burger">
                    <li><a href="#root">ГЛАВНАЯ</a></li>
                    <li><a href="#2">ОБ АВТОРЕ</a></li>
                    <li><a href="#3">РАБОТЫ</a></li>
                    <li><a href="#4">НАВЫКИ</a></li>
                    <li><a href="#6">ПРОЕКТЫ</a></li>
                    <li><a href="#5">КОНТАКТЫ</a></li>
                </ul>
            </nav >
            <span className='close_burger' onClick={() => setBurger(!moveBurger)}><img src={require('./pngwing.png')} /></span>
        </div >);

}

export default Burger;
