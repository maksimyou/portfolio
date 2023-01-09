import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
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
  function id() {
    return nanoid();
  };

  let [isEditId, setidEditId] = useState(null);
  let [toDoList, setToDoList] = useState([{ id: id(), title: 'Пример заголовка 1', disc: 'Описание дела...великого и не раздельного', completed: false }, { id: id(), title: 'Пример заголовка 2', disc: 'Описание дела2...великого и не раздельного', completed: false }, { id: id(), title: 'Пример заголовка 3', disc: 'Описание дела3...великого и не раздельного', completed: false }]);




  return (
    <div className="wrapper">
      {/*<Header />*/}
      {/*<Main />*/}
      {/*<ToDoList />*/}

      {/*Комментарий: Header2 подгружается поверх основного хедара*/}

      <Routes>
        <Route path='/' element={<WrapperRoutes />}>
          <Route index element={<Main />} />
          <Route path='ToDoList' element={<><Header2 /><ToDoList isEditId={isEditId} setidEditId={setidEditId} toDoList={toDoList} setToDoList={setToDoList} /></>} />
          <Route path='ListAdd' element={<><Header2 /><ListAdd isEditId={isEditId} setidEditId={setidEditId} toDoList={toDoList} setToDoList={setToDoList} id={id} /></>} />
          <Route path='ListEdit' element={<><Header2 /><ListEdit isEditId={isEditId} setidEditId={setidEditId} toDoList={toDoList} setToDoList={setToDoList} /></>} />
          {/*<Route path='*' element={<Main />} />*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;