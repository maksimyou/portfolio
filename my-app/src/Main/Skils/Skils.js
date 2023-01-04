import './Skils.css'
function Skils() {

    return (
        <div className="my_skils_container">
            <div className="my_skils_content">
                <div className="my_skils_lists">
                    <div className="lists_title">Мои навыки</div>
                    <div className="lists_list">
                        <div className="list_item_1 list_item">CSS,HTML,JavaScript</div>
                        <div className="list_item_2 list_item">JavaScript,TypeScript</div>
                        <div className="list_item_3 list_item">React,Vue.js,Angular,jQuery</div>
                        <div className="list_item_4 list_item">Препроцессоры SCSS, SASS</div>
                        <div className="list_item_5 list_item">Адаптив,БЭМ,Git</div>
                        <div className="list_item_6 list_item">MySQL,MongoDB,GraphQL</div>
                    </div>
                </div>
                <div className="my_skils_avatar"><img src={require('./avatart.png')} alt="" /></div>
            </div>
        </div>
    );


}

export default Skils;
