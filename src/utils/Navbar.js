import { NavLink } from 'react-router-dom';
import '../assets/styles.css';

const Navbar = () => {
  return (
    <ul ClassName = 'menu'>
      <NavLink exact to='/' activeClassName='active'>
        <img src="/src/assets/media/fresh-logo.png"/>
      </NavLink>
      <NavLink to='/Articles' activeClassName='active'>
        Articles
      </NavLink>
      <NavLink to='/Interviews' activeClassName='active'>
        Interviews
      </NavLink>
      <NavLink to='/Tutorials' activeClassName='active'>
        Tutorials
      </NavLink>
      <NavLink to='/Philosophie' activeClassName='active'>
        Philosophie
      </NavLink>
      <NavLink to='/Collaborators' activeClassName='active'>
        Collaborators
      </NavLink>
      <NavLink to='/contact' activeClassName='active'>
        Contact
      </NavLink>
    </ul>
  );
};

export default Navbar;