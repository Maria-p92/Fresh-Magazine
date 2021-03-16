import {Link} from 'react-router-dom';
import homeimg from '../assets/media/levi.jpeg';

const Home = ()=> {
    return (
        <div className='container' id='homecontainer' style={{display:'flex'}}>
            <div>
                <h4>BE FRESH!</h4>
                <Link to='/articles' id='homeLi'>Check out our new articles</Link>
            </div>
            <div className='viewoverlay'>
                <img src={homeimg} alt='homeimg' className='img-fluid' id='imagen' />
            </div>
            
        </div>
    )
}

export default Home