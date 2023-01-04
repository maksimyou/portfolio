import './Projects.css'
function Projects() {

    return (
        <div className='projects_container' >
            <div className='projects_content'>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-1.png')} /></a></div>
                <div className='projects_item'><a href='/#'><img src={require('./Rectangle-2.png')} /></a></div>
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
