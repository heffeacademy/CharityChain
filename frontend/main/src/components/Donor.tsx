import "../styles/donors.css";
import img1 from '../assets/donor-img1.png';
import img2 from '../assets/donor-img2.png';
import img3 from '../assets/donor-img3.png';
import HeartChain from "../assets/heart_chain.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Carousel() {
    const slidesData = [
        {
            src: img1,
            alt: "Image 1",
            title: "Alex Chen",
            text: "Donated $5,000+",
            info: "Supporter for 9+ Month",
            link: "",
        },
        {
            src: img2,
            alt: "Image 2",
            title: "Kevin Zhuo",
            text: "Donated $10,000+",
            info: "Supporter for 2+ Month",
            link: "",
        },
        {
            src: img3,
            alt: "Image 3",
            title: "Anish Jayant",
            text: "Donated $1,000+",
            info: "Supporter for 5+ Month",
            link: "",
        }
    ]

    return (
        <>
            <div className="donors">
                {slidesData.map((item, idx) => {
                    return (
                        <div className="card">
                            <img
                                src={item.src}
                                alt={item.alt}
                                key={idx}
                                className="donor-img"
                            />
                            <br />
                            <Container>
                                <Row>
                                    <Col xs lg="8" className="card-text">
                                        <div className="text-head">
                                            {item.title}
                                        </div>
                                        <div className="text">
                                            {item.text}
                                            <br />
                                            {item.info}

                                        </div>
                                    </Col>
                                    <Col xs lg="4">
                                        <img src={HeartChain} alt="logo" className="donor-heart" />

                                    </Col>
                                </Row>
                            </Container>
                        </div>

                    );
                })}
            </div>
        </>
    );
}

export default Carousel