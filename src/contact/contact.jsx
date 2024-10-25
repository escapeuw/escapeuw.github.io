import './contact.css';

function Contact() {
    return (
        <section id="contact">
            <div className="contactContainer">
                <div className="contactItem"><i class="fa-brands fa-github"></i></div>
                <div className="contactItem"><i class="fa-brands fa-linkedin"></i></div>
                <div className="email">
                    <span><i class="fa-solid fa-envelope"></i> d.hwang0918@gmail.com</span>
                    <span className="copyButton">copy</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;