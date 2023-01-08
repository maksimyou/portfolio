import './ListMain.css'
import { Link } from "react-router-dom";

//import ListEdit from '../ListEdit/ListEdit';
//import ListAdd from '../ListAdd/ListAdd';

function ListMain() {

    return (

        <div className="container_list_working">
            <h1 className='project_check_list'>Проект Чеклист в React</h1>
            <div className='container_list_active'>
                <div className="content_list_working">
                    <ul className="list_working_lists">
                        <li className="highlight cross-out">1. Пример дела - такого при такого</li>
                    </ul>
                </div>
                <div className="actions_list_working">
                    <button className="actions_list_btn"><span><Link to='../ListEdit'>Редактировать</Link></span></button>
                    <button className="actions_list_btn"><span><Link to='../ListAdd'>Добавить</Link></span></button>
                    <button className="actions_list_btn"><span> Удалить</span></button>
                    <button className="actions_list_btn"><span> Завершить</span></button>
                </div>
            </div>
        </div>

    );


}

export default ListMain;
