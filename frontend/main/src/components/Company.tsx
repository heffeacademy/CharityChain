
import { FaGlobe, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../assets/support.png";
import Sui from "../assets/sui.svg";
import HeartChain from "../assets/heart_chain.png";
import Proposal1 from "../assets/proposal1.png";
import Proposal2 from "../assets/proposal2.png";
import Activity1 from "../assets/activity1.png";
import Activity2 from "../assets/activity2.png";
import '../styles/company.css';
import { Link } from "react-router-dom";

function Company() {
  const activities = [
    {
      src: Activity1,
      address1: "0xc8...1e43",
      value: "400",
      to_img: Logo,
      address2: "0xp0...2i32",
      to: "Treasury DAO",
    },
    {
      src: Activity2,
      address1: "0x48...1320",
      value: "1,000",
      to_img: Logo,
      address2: "0xp0...2i32",
      to: "Treasury DAO",
    },
    {
      src: Activity1,
      address1: "0x51...13d3",
      value: "800",
      to_img: Logo,
      address2: "0xp0...2i32",
      to: "Treasury DAO",
    },
    {
      src: Activity2,
      address1: "0x1r...341f",
      value: "2,000",
      to_img: Logo,
      address2: "0xp0...2i32",
      to: "Treasury DAO",
    },
  ]
  return (
    <>
      <div>
        <Container>
          <Row className="company_head">
            <Col xs md="6" className="companyDiv">
              <img src={Logo} alt="Logo" className="companyLogo" />
              <div className="align-left">
                <h3 className="subhead">Flowers For The Future</h3>
                <p className="normaText">Student-run organization dedicated to helping under-served female across the world. Provides infrastructure for education conducting monthly Zoom calls. </p>
              </div>
            </Col>
            <Col xs md="6">
              <div className="align-left c_info">
                <h3 className="headText">Treasury</h3>
                <div className="headText">
                  <img src={Sui} alt="Logo" className="suiLogo" /> <span className="seperate">50,000  </span> <span> $30,000</span>

                </div>
                <div>
                  <FaSquareInstagram className='social-icons2' />
                  <FaGlobe className='social-icons2' />
                  <FaSquareTwitter className='social-icons2' />
                </div>
              </div>
            </Col>
          </Row>
          <Row className="company_head">
            <Col xs md="6">
              <div className="align-left">
                <span className="seperate headText color-red">Current Proposals </span> <span className="headText">Past Proposals</span>
              </div>
              <div className="proposalDiv">
                <img src={Proposal1} alt="Logo" className="companyLogo" />
                <div className="align-left">
                  <h3 className="subhead">Providing School Computers</h3>
                  <p className="normaText color-red">Fundraised money will be spent towards purchasing 20 computers @ $200 each to help create a learning infrastructure for girls learning English to receive their online high-school GED.</p>
                  <Link to="/partnership">
                    <div className="info-button red-button btn-box">Learn More</div>
                  </Link>
                  <img src={HeartChain} alt="logo" className="small-heart" />

                </div>
              </div>
            </Col>
            <Col xs md="6">
              <div className="align-right">
                <Link to="/collection">
                  <div className="info-button red-button m-r-20">Connect Wallet</div>
                </Link>
                <Link to="/partnership">
                  <div className="info-button white-button">Submit Proposal</div>
                </Link>
              </div>
              <div className="proposalDiv">
                <img src={Proposal2} alt="Logo" className="companyLogo" />
                <div className="align-left">
                  <h3 className="subhead">Expansion to Other Schools</h3>
                  <p className="normaText color-red">Money will be delegated towards spending $5,000 per school in Kenya and Afghanistan to help operate and maintain the teaching salaries, hire bodyguards, and provide living costs such as food and wifi.</p>
                  <Link to="/partnership">
                    <div className="info-button red-button btn-box">Learn More</div>
                  </Link>
                  <img src={HeartChain} alt="logo" className="small-heart" />

                </div>
              </div>
            </Col>
          </Row>
          <Row className="activity">
            <Col xs md="6">
              <div className="align-left">
                <span className="subhead">Activity </span>
              </div>
            </Col>
            <Col xs md="6">
              <div className="align-right">
                <span className="seperate subhead color-red">Donations </span> <span className="subhead"> Withdrawals</span>
              </div>
            </Col>
          </Row>
          {activities.map((item, idx) => {
            return (
              <Row className="activities">
                <Col xs md="4" className="activityCol">
                  <img src={item.src} alt="Logo" className="logo_src" />
                  <div className="align-left">
                    <h3 className="subhead">{item.address1}</h3>
                    <p className="normaText">Sent {item.value} SUI</p>
                  </div>
                </Col>
                <Col xs md="1" className="activityCol normaText">TO</Col>
                <Col xs md="4" className="activityCol">
                  <img src={item.to_img} alt="Logo" className="logo_src" />
                  <div className="align-left">
                    <h3 className="subhead">{item.address1}</h3>
                    <p className="normaText">{item.to}</p>
                  </div>
                </Col>
                <Col xs md="3" className="activityCol normaText color-red">Transaction Hash</Col>

              </Row>
            )
          })}
          <Row className="subhead color-red load">
            load more...
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Company