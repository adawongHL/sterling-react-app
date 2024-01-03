import { PhysicsPropsPlugin } from 'gsap-trial/all';
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const path = window.location.pathname;

    return (
    <nav className='nav'>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/lectures">Lectures</Link>
            <Link to="/codes">Codes</Link>
            <Link to="/courseinfo">Course Info</Link>
            <Link to="/taofficehours">TA/Office Hours</Link>
            <Link to="/resources">Resources</Link>
        </ul>
    </nav>
    )
}

function CustomLink( { to, children, ...props } ) {
    const path = window.location.pathname;
    return (<li className={ path=== to ? 'active' : ''}>
        <a to={to} {...props}> {children} </a>
    </li>)
}

/*
Attempt to do routing:
import { PhysicsPropsPlugin } from 'gsap-trial/all';
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const path = window.location.pathname;

    return (
    <nav className='nav'>
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/lectures">Lectures</CustomLink>
            <CustomLink to="/codes">Codes</CustomLink>
            <CustomLink to="/courseinfo">Course Info</CustomLink>
            <CustomLink to="/taofficehours">TA/Office Hours</CustomLink>
            <CustomLink to="/resources">Resources</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink( { to, children, ...props } ) {
    const path = window.location.pathname;
    return (<li className={ path=== to ? 'active' : ''}>
        <a to={to} {...props}> {children} </a>
    </li>)
}




<li> <Link to="/" className='active'>Home</Link></li>
            <li><Link to="/lectures">Lectures</Link></li>
            <li> <Link to="/codes">Codes</Link></li>
            <li><Link to="/courseinfo">Course Info</Link></li>
            <li><Link to="/taofficehours">TA/Office Hours</Link></li>
            <li><Link to="/resources">Resources</Link></li>
*/