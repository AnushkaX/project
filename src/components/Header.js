const Header = () => {
    return (
        <header>
            <div className = "logo">
                LOGO
            </div>
            <nav>
                <ul>
                    <li className="first">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
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