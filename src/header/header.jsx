import './header.css';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">d.Hwang<span>.dev</span></div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#project">Projects</a>
                    <a href="#timeline">Timeline</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>

    );
}

export default Header;

