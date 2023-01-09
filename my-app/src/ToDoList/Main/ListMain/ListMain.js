import './ListMain.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { nanoid } from 'nanoid';
function ListMain(prop) {

    function addClass(id) {
        if (prop.isEditId === id) { return ' highlight' } else { return '' };
    };

    function editCheckList() {
        prop.setToDoList(prop.toDoList.map(todo => {
            if (prop.isEditId == todo.id) {
                return { ...todo, completed: true };
            } else { return todo; }
        }))
    };


    function markerDelete(comp, id) {
        if (comp && id == prop.isEditId) { return 'highlight cross-out' }
        else if (comp) {
            return 'cross-out'
        };
    };

    function deleteCheckList() {

        prop.setToDoList(prop.toDoList.filter(todo => {
            if (prop.isEditId != todo.id) {
                return todo;
            }

        }));
    };


    let list = prop.toDoList.map((todo) => {
        //addClass(todo.id);
        return <li className={todo.completed ? markerDelete(todo.completed, todo.id) : addClass(todo.id)} key={todo.id} onClick={() => { prop.setidEditId(todo.id) }
        }> {todo.title}</li >
    });


    return (

        <div className="container_list_working">
            <h1 className='project_check_list'>Проект - Чеклист в React</h1>
            <div className='container_list_active'>
                <div className="content_list_working">
                    <ul className="list_working_lists">
                        {list}
                    </ul>
                </div>
                <div className="actions_list_working">
                    <button className="actions_list_btn"><span><Link to='../ListEdit'>Редактировать</Link></span></button>
                    <button className="actions_list_btn"><span><Link to='../ListAdd'>Добавить</Link></span></button>
                    <button className="actions_list_btn"><span onClick={() => { deleteCheckList() }}> Удалить</span></button>
                    <button className="actions_list_btn"><span onClick={() => { editCheckList() }}> Завершить</span></button>
                </div>
            </div>
        </div>

    );


}

export default ListMain;
