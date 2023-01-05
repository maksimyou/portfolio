import './Form.css'
function Form() {

    return (
        <div id='5' className='form_container' >
            <div className="form_content">
                <div className="form_content_contact">
                    <h2 className="form_contact_title">Свяжитесь со мной</h2>
                    <div className="form_contact_discription">Любым удобным для вас способом.</div>
                    <div className="form_contact_social">
                        <a className='contact_social_link' href='https://web.telegram.org/'><img src={require('../socials/telegram.png')} alt='' /></a>
                        <a className='contact_social_link' href='https://ru.linkedin.com/'><img src={require('../socials/linkedin.png')} alt='' /></a>
                        <a className='contact_social_link' href='https://my-site.com'><img src={require('../socials/letter-m.png')} alt='' /></a>
                        <a className='contact_social_link' href='https://github.com/'><img src={require('../socials/github.png')} alt='' /></a>
                    </div>

                </div>
                <form className='form_content_forms'>
                    <div className='form_content_initial'><input className="form_name" placeholder='Ваше имя' /><input className="form_email" placeholder='Ваш e-mail' /></div>
                    <div className='form_content_text'><textarea className="form_text" placeholder='Сообщение' /></div>
                    <div><button className='form_content_button'><span>Отправить</span></button></div>

                </form>
            </div>
        </div >
    );


}

export default Form;
