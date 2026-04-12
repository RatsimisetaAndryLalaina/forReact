import { NavLink } from 'react-router-dom';
import style from './Root.module.css';

const handleActivatedNavLink = ({ isActive }: { isActive: boolean }) => {
    console.log('style', style);
    return isActive ? style.currentactive : undefined;
};

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={handleActivatedNavLink} to="/" end>About</NavLink>
                </li>
                <li>
                    <NavLink className={handleActivatedNavLink} to="/contact" end>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;