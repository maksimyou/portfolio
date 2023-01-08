import React from 'react';
import './Frontend.css';
function Frontend() {

    return (

        <div className="header_frontend_main_container">
            <div className='frontend_main_content'>
                <div className="header_frontend_img">
                    <img src={require('./frontend.png')} alt="" />
                </div>
                <div className="frontend_contant">
                    <div className="frontend_contant_title">Разработка сайтов и приложений.</div>
                    <div className="frontend_contant_text">Разработаю сайт по всем современым методам. Прикреплю сайт к CMS и настрою. Доработаю и улучшу функционал вашего сайта. Сделаю адаптив.
                    </div>
                    <button className="frontend_contant_button"><a href="#5">НАПИСАТЬ МНЕ</a></button>
                </div>
            </div>
        </div>
    );
}

export default Frontend;




