import Navbar from "../components/Navbar"

const About = () => (
    <Navbar title={'About'}>
        <div className='jumbotron'>
            <div className='container'>
                <h1 className='display-4'>Лучшее React app</h1>
                <p className='lead'>Версия приложения <strong>1.0.42</strong></p>
            </div>
        </div>
    </Navbar>
)

export default About