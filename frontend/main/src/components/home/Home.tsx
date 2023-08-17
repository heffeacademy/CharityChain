import '../../styles/home.css';
import HeartChain from "../../assets/heart_chain.png";
import Collab1 from "../../assets/collab1.png";
import Collab2 from "../../assets/collab2.png";
import Collab3 from "../../assets/collab3.png";
import offset from "../../assets/offset.svg";
import recieve from "../../assets/recieve.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import FAQ from "../../assets/faq-heart.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "./Carousel";
import Donor from "./Donor";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const faqData = [
    {
      title: "Can it be refund?",
      text: "Content...",
    },
    {
      title: "Can it be monetized to dollars?",
      text: "Content ...",
    },
    {
      title: "Does it need credit cards?",
      text: "Content ...",
    },
    {
      title: "Can I get dividend?",
      text: "Content ...",
    },
    {
      title: "Is it tax free?",
      text: "Content ...",
    }
  ]
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (sectionNumber: number) => {
    if (openSection === sectionNumber) {
      setOpenSection(null); // Close the currently open section
    } else {
      setOpenSection(sectionNumber); // Open the clicked section
    }
  };

  return (
    <>
      <div className="">
        <div className="view-1">
          <div className="info">
            <div className="left-info">
              <h1 className="heading">
                The Donation Democracy
              </h1>
              <h2 className="sub-heading">
                Open Transparency for all your<br />
                donations using NFTs
              </h2>
              <br />
              <br />
              <div className=''>
                <Link to="/collection">
                  <div className="info-button white-button m-r-60">Our Collections</div>
                </Link>
                <Link to="/partnership">
                  <div className="info-button red-button">Become Our Partner</div>
                </Link>
              </div>
            </div>
            <div className="right-info">
              <img src={HeartChain} alt="logo" className="" />
            </div>
          </div>
          <div className='collab'>
            <div className='page-head'>
              Trusted By Top Charities Nationwide
            </div>
            <div className='collab-info'>
              <img src={Collab1} alt="logo" className="collab-img" />
              <img src={Collab2} alt="logo" className="collab-img" />
              <img src={Collab3} alt="logo" className="collab-img" />
            </div>
          </div>
        </div>
        <div className="view-2">
          <div className='view2-text'>
            Don’t Let Your Donations Become A Charity <br /> Executive’s Paycheck. See Where All the<br /> Donations End Up.
            <div className='donation-amt'>
              $30,000
            </div>
          </div>
          <div className="left-view2">
            <h2 className="view2-subtext">
              Open-Booked Donations
            </h2>
            <br />
            <br />
            <div>
              <Link to="/company" className="info-button red-button">
                Get Involved Now
              </Link>
            </div>
          </div>
          <div className="right-view2">
            <img src={HeartChain} alt="logo" className="heart-90-img" />
          </div>
        </div>
        <div className="view-3-support">
          <div>
            <Carousel />
          </div>
        </div>
        <div className="view-4-how">
          <div className='how-text'>
            How does it work
            <p className='how-t'>4 Simple Steps To Start</p>
          </div>
          <div className="HeartBg">

            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="3" className='tile'>
                  <div className="tile-icon">
                    <img src={user} alt="create account" />
                  </div>
                  <div className="text">
                    <p className='tile-head'>Create Account</p>
                    <p className='tile-text'>Set up a crypto wallet and exchange funds through exchanges</p>
                  </div>
                </Col>
                <Col md="1"> </Col>
                <Col xs lg="3" className='tile'>
                  <div className="tile-icon">
                    <img src={search} alt="search" />
                  </div>
                  <div className="text">
                    <p className='tile-head'>Find Artwork</p>
                    <p className='tile-text'>We  will help create a personalized NFT collection with drawings that feature all aspects of your charity</p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3" className='tile'>
                  <div className="tile-icon">
                    <img src={recieve} alt="receive donation" />
                  </div>
                  <div className="text">
                    <p className='tile-head'>Recieve Donations</p>
                    <p className='tile-text'>Publicize to your loyal supporters while CharityChain automates all money raised</p>
                  </div>
                </Col>
                <Col md="1"> </Col>
                <Col xs lg="3" className='tile'>
                  <div className="tile-icon">
                    <img src={offset} alt="offset donation" />
                  </div>
                  <div>
                    <p className='tile-head'>Offboard Crypto Donations</p>
                    <p className='tile-text'>With all your raised funds, we will provide instructions  to help transfer the money into fiat. </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="auto"> </Col>
                <Col md="4">
                  <Link to="/contact">
                    <span className='info-button red-button'>Set up a Consultation Call</span>
                  </Link>
                </Col>
                <Col md="auto"> </Col>


              </Row>
            </Container>
          </div>

        </div>
        <div className="view-5-donors">
          <div className='donor-head'>
            6,000+ Donors Have Donated
            <br />
            Join Our Community
          </div>
          <div>
            <Donor />
          </div>
        </div>
        <div className="view-6-FAQ">
          <Container>
            <Row>
              <Col xs md="6">
                <img src={FAQ} alt="FAQ" className="faq-heart" />

              </Col>
              <Col xs md="6" className='faq-text'>
                <div className='donor-head p-0'>
                  Frequently Asked Questions
                </div>
                <div className=''>
                  {faqData.map((item, index) => (
                    <div>
                      <div key={index} className='faq-info'>
                        <h2 onClick={() => toggleSection(index)}>{item.title}</h2> <span style={{ cursor: "pointer" }} onClick={() => toggleSection(index)}>+</span>
                      </div>
                      <div>
                        {openSection === index && <div>{item.text}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>

        </div>

      </div>
    </>
  )
}

export default Home