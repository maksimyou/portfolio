import './Projects.css'
function Projects() {

    return (
        <div id='6' className='projects_container' >
            <div className='projects_content'>
                <div className='projects_item'><a target="_blank" href='https://maksimyou.github.io/Panteon'><img src={require('./project-1.png')} /></a></div>
                <div className='projects_item'><a target="_blank" href='https://maksimyou.github.io/movies-react/'><img src={require('./project-2.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-1.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-2.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-2.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-1.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-2.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-1.png')} /></a></div>
            </div>
        </div >
    );


}

export default Projects;
