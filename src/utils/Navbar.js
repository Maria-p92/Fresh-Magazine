import { Link, NavLink } from 'react-router-dom';
import '../assets/styles.css';
import logo from '../assets/media/freshLogo.png';
import { button, collapse} from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className='navbar sticky-top flex-column navbar-expand-md' id='menu'>
          <Link className='navbar-brand' to='/'>
            <img id="logoF" src={logo}/>
          </Link>  
      <div className='container-fluid' id='menu'>    
          <div className='menu collapse navbar-collapse'>
            <ul ClassName = 'navbar-nav ml-auto'>
              <NavLink to='/Articles' activeClassName='active' className='itemsmenu'>
                Articles
              </NavLink>
              <NavLink to='/Interviews' activeClassName='active' className='itemsmenu'>
                Interviews
              </NavLink>
              <NavLink to='/Tutorials' activeClassName='active' className='itemsmenu'>
                Tutorials
              </NavLink>
              <NavLink to='/Philosophie' activeClassName='active' className='itemsmenu'>
                Philosophie
              </NavLink>
              <NavLink to='/Collaborators' activeClassName='active' className='itemsmenu'>
                Collaborators
              </NavLink>
              <NavLink to='/contact' activeClassName='active' className='itemsmenu'>
                Contact
              </NavLink>
            </ul>
          </div>
      </div>   
  </nav>
    
  );
};

export default Navbar;