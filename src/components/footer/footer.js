import React from "react";
import { Container } from 'react-bootstrap';
import footer from './footer.scss';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer>
            <Container fluid>
                <div className="footer-wrap">
                    <div className="copyright">©{currentYear} Book Worm. All rights reserved</div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer;