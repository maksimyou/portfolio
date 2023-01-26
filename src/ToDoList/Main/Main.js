import './Main.css'
import ListMain from './ListMain/ListMain';

function Main(prop) {


    return (

        <div className="container_main_list">
            <ListMain isEditId={prop.isEditId} setidEditId={prop.setidEditId} toDoList={prop.toDoList} setToDoList={prop.setToDoList} />
        </div>

    );


}

export default Main;
