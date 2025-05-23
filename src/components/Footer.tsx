import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer-left">© 2025 Daniel Hwang</span>
            <div className="footer-icons">
                <a href="https://github.com/escapeuw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </a>
                <a href="https://linkedin.com/in/dhwang2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                </a>
                <a href="https://instagram.com/escapeuw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
