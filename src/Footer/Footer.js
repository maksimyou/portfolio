import React from 'react';
import '../App.css';
import './Footer.css';
function Footer() {

    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="footer_content_initial"><div className="content_initial_name">Ашмарин Максим</div><div className="content_initial_copirigt">(с) 2022. Все права защищены.</div></div>
                <div>
                    <a className='footer_contact_social_link' href='https://t.me/mmakssimm'><img src={require('../Main/socials/telegram.png')} alt='' /></a>
                    <a className='footer_contact_social_link' href='https://github.com/maksimyou'><img src={require('../Main/socials/github.png')} alt='' /></a>
                </div>
            </div>
        </div >
    );
}

export default Footer;
