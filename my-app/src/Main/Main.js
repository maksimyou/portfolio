
import Works from './Works/Works';
import About from './About/About';
import Skils from './Skils/Skils';
import Projects from './Form/Form';
import Form from './Projects/Projects';

import './Main.css'
function Main() {

    return (
        <div className='main_container' >
            <About />
            <Works />
            <Skils />
            <Projects />
        </div >
    );


}

export default Main;
