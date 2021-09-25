import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className = "logo">
                LOGO
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