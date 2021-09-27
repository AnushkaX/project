import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className = "logo">
                LOGO
            </div>
            <div className="theme-options">
                <div id='theme-white'/>
                <div id='theme-blue'/>
                <div id='theme-orange'/>
                <div id='theme-purple'/>
                <div id='theme-green'/>
                <div id='theme-black'/>
            </div>
            <nav>
                <ul>
                    <li className="first">
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li className="last">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;