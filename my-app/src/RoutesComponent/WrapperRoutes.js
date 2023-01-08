
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
//import Main from './Main/Main';
import Footer from '../Footer/Footer';
//import ToDoList from './ToDoList/ToDoList';
//import Header2 from './ToDoList/Header/Header';

function WrapperRoutes() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default WrapperRoutes;