import './Burger.css';
function Burger({ moveBurger, setBurger }) {
    return (
        <div className={moveBurger ? "header_menu_container_burger" + ' active' : "header_menu_container_burger"} >
            <nav className="header_menu_list_burger">
                <ul className="menu_list_content_burger">
                    <li><a href="">ГЛАВНАЯ</a></li>
                    <li><a href="">ОБ АВТОРЕ</a></li>
                    <li><a href="">РАБОТЫ</a></li>
                    <li><a href="">ПРОЦЕСС</a></li>
                    <li><a href="">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <span className='close_burger' onClick={() => setBurger(!moveBurger)}>Закрыть</span>
        </div >
    );


}

export default Burger;
