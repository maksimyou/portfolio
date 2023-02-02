import './Works.css';
import { Link } from 'react-router-dom';
function Works() {

    return (
        <div id='3' className='works_container' >
            <div className="works_contant">
                <Link to="/ToDoList" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>Проект</span>№1</div>
                </Link>
                <Link to="/Calculator" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>Проект</span>№2</div>
                </Link>
                <a href="#" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>5+</span> проектов</div>
                </a>
                <a href="#" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>5+</span> проектов</div>
                </a>
                <a href="#" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>5+</span> проектов</div>
                </a>

            </div>
            {/*<Routes>
                <Route path='/ToDoList' element={<ToDoList />} />
            </Routes>*/}
        </div >
    );


}

export default Works;
