import './Works.css'
function Works() {

    return (
        <div id='3' className='works_container' >
            <div className="works_contant">
                <a href="#" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>5+</span> проектов</div>
                </a>
                <a href="#" className="works_item"><img src={require("../Works/project.png")} alt="" />
                    <div className="works_count_project"><span>5+</span> проектов</div>
                </a>
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
        </div >
    );


}

export default Works;
