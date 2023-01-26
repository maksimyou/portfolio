import { useState } from 'react';
import './Form.css'
function Form() {

    let [mail, setMail] = useState('');
    let [errorMail, setErrorMail] = useState(true);
    let [errorName, setErrorName] = useState(true);
    let [warning, setWarning] = useState('');




    let form = document.querySelector('.form_content_forms');

    function mailer(e) {
        e.preventDefault();
        let formData = new FormData(form);
        fetch('/phpmailer/index.php', {
            method: 'POST',
            body: formData
        })
            .then((Response) => {
                console.log(Response);
            })
            .then(text => console.log(text))
    }

    //Проверка формы

    // (почта)
    let email = new RegExp(/^([a-z0-9\-_\.]+)\@[a-z\-]+\.[a-z]{2,5}$/g);
    function submitMail(e) {
        if (email.test(mail) || !e.target.value.length) {
            setErrorMail(true);
        }
        else {
            setErrorMail(false);
        }
    };



    //Имя пользователя
    function submitName(e) {
        if (e.target.value.length > 4 || !e.target.value.length) {
            setErrorName(true);
        }
        else {
            setErrorName(false);
        }
    };

    //Сообщение предупреждение

    function warnMessage() {
        (errorName && errorMail) ? setWarning("") : setWarning("Введите правильные данные в поля ввода.")
    };


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
                <form className='form_content_forms' >
                    <div className='form_content_initial'>
                        <input className={errorName ? "form_name" : "form_name error"} placeholder='Ваше имя' onInput={(e) => submitName(e)} name='name' />
                        <input className={errorMail ? 'form_email' : 'form_email error'} onBlur={(e) => submitMail(e)} onInput={(e) => { setMail(e.target.value) }} placeholder='Ваш e-mail' name='email' />
                    </div>
                    <div className='form_content_text'>
                        <textarea className="form_text" placeholder='Сообщение' name='text' />
                    </div>
                    <div className='auxiliary_form'>
                        <div className='warning_message'>{warning}</div>
                        <button onClick={(e) => { mailer(e); warnMessage(); }} className='form_content_button'><span>Отправить</span></button>
                    </div>

                </form>
            </div>
        </div >
    );


}

export default Form;
