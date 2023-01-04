import './About.css'
function About() {

    return (
        <div className='about_container' >
            <div className="about_content">
                <div className="about_content_title">Обо мне</div>
                <div className="about_content_text"><h1>Меня зовут Максим</h1><br />Я <span className='fronend_dev'>frontend-разработчик.</span> Мне нравится решать сложные задачи: разрабатывать сайты и веб-приложения или создавать дизайн для разных целей.<br />

                    Меня захватывает процесс разработки и возможность создавать удобные и полезные продукты. Посмотрите мои работы в разделе <a className='portfolio' href='' >Портфолио.</a><br />

                    Я открыт к предложениям на позицию frontend-разработчика или графического дизайнера, где могу внести свой вклад и развиваться вместе с компанией.<br />

                    Если у вас есть вакансия, которая соответствует моим навыкам и опыту, не стесняйтесь связаться со мной, буду рад сотрудничеству.
                </div>
            </div>
        </div >
    );


}

export default About;
