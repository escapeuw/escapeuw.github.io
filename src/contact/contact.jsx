import './contact.css';

function Contact() {
    return (
        <section id="contact">
            <div className="contactContainer">
                <a href="https://github.com/escapeuw" target="blank" style={{ textDecoration: "none", cursor: "default" }}>
                    <div className="contactItem">
                        <i class="fa-brands fa-github"></i>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/dhwang2" target="blank" style={{ textDecoration: "none", cursor: "default" }}>
                    <div className="contactItem">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </a>
                <a href="https://www.instagram.com/escapeuw" target="blank" style={{ textDecoration: "none", cursor: "default" }}>
                    <div className="contactItem">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </a>
            </div>

            <div className="email" onClick={() => {
                navigator.clipboard.writeText('d.hwang0918@gmail.com');
                alert("Copied to clipboard!")
            }}>
                <span>d.hwang0918@gmail.com</span>
                <span className="vl"></span>
                <span>Copy</span>
            </div>
            <div className="copyright">
                <p>Daniel Hwang <span className="crYear">©2024</span></p>
            </div>
        </section>
    )
}

export default Contact;