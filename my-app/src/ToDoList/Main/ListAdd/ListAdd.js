import './ListAdd.css'
import { Link } from 'react-router-dom';

function ListAdd() {

    return (

        <div className="container_list_working_edit_add">
            <div className="content_list_working">
                <div className="title_list_working"><input type="text" name="" id="" placeholder="Заголовок дела" /></div>
                <div className="field_list_edit"> <textarea className="textarea-edit" placeholder="Текст для редактирования"
                    name="" id=""></textarea>
                </div>
            </div>
            <div className="actions_list_working_edit_add">
                <button className="actions_list_btn"><span><Link to={'../ToDoList'}>Добавить</Link></span></button>
            </div>
        </div>

    );


}

export default ListAdd;






