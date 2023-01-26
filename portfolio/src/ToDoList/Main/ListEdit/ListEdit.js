import './ListEdit.css'

import { Link } from 'react-router-dom';


function ListEdit(prop) {
    console.log(prop)


    let discription;
    let title;
    prop.toDoList.forEach(element => {
        if (element.id == prop.isEditId) { discription = element.disc; title = element.title }
    });
    console.log(discription, title)


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
                <button className="actions_list_btn" onClick={(e) => {
                    prop.setToDoList(prop.toDoList.map(elem => {
                        if (elem.id == prop.isEditId) {
                            return { ...elem, title: title, disc: discription }
                        } else {
                            return elem
                        }

                    }))
                }}><span><Link to={'../ToDoList'}>Сохранить</Link></span></button>
            </div>
        </div>

    );


}

export default ListEdit;


