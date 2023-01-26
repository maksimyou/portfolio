import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
//import Main from './Main/Main';
import Footer from '../Footer/Footer';
//import ToDoList from './ToDoList/ToDoList';
//import Header2 from './ToDoList/Header/Header';

function WrapperRoutes() {
    let [classArrow, setClassArrow] = useState(false);

    function arrowShow() {
        if (window.scrollY >= 1400) {
            setClassArrow(true);
        };
        if (window.scrollY <= 1400) {
            setClassArrow(false);
        };
    };
    window.addEventListener('scroll', () => {
        arrowShow();
    });


    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <a className={classArrow ? 'active-arrow' : 'arrow'} href='#root'><img src={require('../arrow.png')} /></a>
        </>
    );
}

export default WrapperRoutes;