import './ToDoList.css'
import Header from '../ToDoList/Header/Header';
import Main from '../ToDoList/Main/Main';
import App from '../App';


function ToDoList(prop) {

    //console.log(prop)

    return (
        <div className='to_do_list_container' >
            {/*<Header />*/}
            <Main isEditId={prop.isEditId} setidEditId={prop.setidEditId} toDoList={prop.toDoList} setToDoList={prop.setToDoList} />
        </div >
    );


}

export default ToDoList;
