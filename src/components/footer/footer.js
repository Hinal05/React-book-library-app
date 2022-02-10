import React from "react";

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer>
            <div className="container-fluid">
                <div className="footer-wrap">
                    <a href="/"><img src="../../images/logo.png" alt="" /> BookLibrary</a>
                    <div className="copyright">©{currentYear} Book Worm. All rights reserved</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;