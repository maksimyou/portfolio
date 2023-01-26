import './ListAdd.css'
import { Link } from 'react-router-dom';

function ListAdd(prop) {
    console.log(prop)

    let discription;
    let title;
    return (

        <div className="container_list_working_edit_add">
            <div className="content_list_working">
                <div className="title_list_working"><input defaultValue={title} onBlur={(e) => {
                    title = e.target.value;
                }} placeholder="Заголовок дела" /></div>
                <div className="field_list_edit"> <textarea defaultValue={discription} onBlur={(e) => {
                    discription = e.target.value;
                }} className="textarea-edit" placeholder="Текст для редактирования"
                    name="" id=""></textarea>
                </div>
            </div>
            <div className="actions_list_working_edit_add">
                <div className='back-list-todo'><Link to={'../ToDoList'}>назад...</Link></div>
                <button onClick={() => {
                    prop.setToDoList([...prop.toDoList, { title: title, disc: discription, id: prop.id() }])
                }} className="actions_list_btn"><span><Link to={'../ToDoList'}>Добавить</Link></span></button>
            </div>
        </div>

    );


}

export default ListAdd;






