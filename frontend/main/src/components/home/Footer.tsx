import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <Container className="footer-container">
                <Row className="justify-content-md-center foot-row">
                    <Col xs md="6" className=''>
                        <div className="">
                            <img src={Logo} alt="logo" className="logo" />
                        </div>
                        <div className="foot-text">
                            The first transparency interactive NFT donation platform
                        </div>
                        <div>
                            <FaSquareFacebook className='social-icons' />
                            <FaSquareInstagram className='social-icons' />
                            <FaSquareTwitter className='social-icons' />
                        </div>
                    </Col>
                    <Col xs md="2" className=''>
                        <div className="">
                            <Link to="/" className="h-link">
                                <div className="headerItem">Home</div>
                            </Link>
                            <Link to="/about" className="h-link">
                                <div className="headerItem">About</div>
                            </Link>
                            <Link to="/partnership" className="h-link">
                                <div className="headerItem">Become a Partner</div>
                            </Link>
                            <Link to="/whitepaper" className="h-link">
                                <div className="headerItem">Whitepaper</div>
                            </Link>
                            <Link to="/contact" className="h-link">
                                <div className="headerItem">Connect</div>
                            </Link>
                        </div>
                    </Col>
                    <Col xs md="4">
                        <div className="foot-text">
                            Stay up to date
                        </div>
                        <div className="foot-note">
                            Sign up down below for our newsletter <br /> to stay up to date!
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder="Email" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </Col>
                </Row>
                Copyrights @ Charity Chain 2023
            </Container>
        </footer>
    );
}

export default Footer;
