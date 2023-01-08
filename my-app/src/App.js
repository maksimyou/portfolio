import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ToDoList from './ToDoList/ToDoList';
import Header2 from './ToDoList/Header/Header';
import ListEdit from './ToDoList/Main/ListEdit/ListEdit';
import ListAdd from './ToDoList/Main/ListAdd/ListAdd';
import WrapperRoutes from './RoutesComponent/WrapperRoutes'

function App() {

  return (
    <div className="wrapper">
      {/*<Header />*/}
      {/*<Main />*/}
      {/*<ToDoList />*/}

      {/*Комментарий Header2 подгружается поверх основного хедара*/}

      <Routes>
        <Route path='/' element={<WrapperRoutes />}>
          <Route index element={<Main />} />

          <Route path='ToDoList' element={<><Header2 /><ToDoList /></>} />
          <Route path='ListAdd' element={<><Header2 /><ListAdd /></>} />
          <Route path='ListEdit' element={<><Header2 /><ListEdit /></>} />
          <Route path='*' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;