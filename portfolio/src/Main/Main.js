import Works from './Works/Works';
import About from './About/About';
import Skils from './Skils/Skils';
import Projects from './Projects/Projects';
import Form from './Form/Form';
import Frontend from './Frontend/Frontend';

import '../App.css'
import './Main.css'
function Main() {

    return (
        <div className='main_container' >
            <Frontend />
            <About />
            <Works />
            <Skils />
            <Projects />
            <Form />
        </div >
    );


}

export default Main;
