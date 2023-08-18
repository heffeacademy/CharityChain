import React, { useState, useEffect, ChangeEvent } from "react";
import '../styles/collection.css';

import NFT1 from '../assets/collection1.png';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGlobe, FaSquareInstagram, FaSquareTwitter, FaArrowRightLong } from "react-icons/fa6";


function Collection() {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);
  const [activeVal, setActiveVal] = useState('val1');

  const slidesData = [
    {
      src: NFT1,
      alt: "Image 1",
      title: "CharityChain NFT 1",
      text: "Donated $5,000+",
      price: 50,
      link: "",
    },
    {
      src: NFT1,
      alt: "Image 2",
      title: "CharityChain NFT 2",
      text: "Sample product of digitizing artworks into transferrable assets. ",
      price: 50,
      link: "",
    },
    {
      src: NFT1,
      alt: "Image 3",
      title: "CharityChain NFT 3",
      text: "Sample product of digitizing artworks into transferrable assets. ",
      price: 50,
      link: "",
    }
  ]

  function createCollection(): void {
    setActiveVal('val2')
  }

  function submitChanges(): void {
    setActiveVal('val3')
  }

  return (
    <>
      <div>
        <Container>
          <Row className="company_head">
            <h1 className='headTitle'> Turn Your Artworks into NFTs</h1>
            <p className='subText'> We are offering to turn your artworks into NFTs even without setting up a crypto<br /> wallet! A seem-less transition to finally have your artwork digitized and <br /> immutability-verifiable.  Its as simple as this!</p>
          </Row>
          {activeVal === 'val1' && <Row>
            <Col xs md="5" className="flex-aligned-even">
              <img src={NFT1} alt="NFT-create" className="create_img" />
              <div className="info-button red-button2" onClick={() => createCollection()} > Create Your Collection</div>
            </Col>
            <Col xs md="2" className="create-arrow flex-aligned-center">
              Digitized
              <FaArrowRightLong className='arrow-icon' />

            </Col>
            <Col xs md="5" className="createDivBox">
              <img src={NFT1} alt="NFT-create" className="create_img" />
              <h3 className='nftTitle'>CharityChain NFT Demo
              </h3>
              <p className='nftTxt'>Sample product of digitizing artworks into transferrable assets. </p>
              <p className='priceTxt'>Min Price : $50</p>
            </Col>
          </Row>
          }



          {/* Upload NFT with Details  */}
          {activeVal === 'val2' && <Row className="detailDiv">
            <Col xs md="6" className='leftInfo flex-aligned-even'>
              <div>
                <p className='detailLabel'>Name of Collection:</p>
                <input className="inputBox"
                  placeholder="Type your Desired Name"
                  value={name}
                />
              </div>
              <div>
                <p className='detailLabel'>Number of NFTs: </p>
                <input className="inputBox"
                  placeholder="0"
                  value={number}
                />
              </div>
              <div>
                <p className='detailLabel'>Description Caption:</p>
                <input className="inputBox des_input"
                  placeholder="Describe your project in 3-4 sentences. Be concise and state where money is spent on. "
                  value={description}
                />
              </div>
              <div>
                <Link to="/collection">
                  <div className="info-button white-button  m-r-60" onClick={() => submitChanges()}>Submit Changes</div>
                </Link>
                <Link to="/collection">
                  <div className="info-button white-button" onClick={() => submitChanges()}>Create NFTs</div>
                </Link>
              </div>
            </Col>
            <Col xs md="2"></Col>

            <Col xs md="4" className='rightInfo'>
              <input type="file" id="hiddenFileInput"
                style={{ display: 'none' }} />
              <label htmlFor="hiddenFileInput" className="uploadImg">
                UPLOAD
                IMAGE HERE
              </label>

              <h4 className='detailLabel'>Title of Collection</h4>
              <p className='subtext'>Describe your project  in your prefer way. Etc... Our Charity’s main fundraised money is spent towards childrens’ education.</p>
              <div><FaSquareInstagram className='social-icons' />
                <FaGlobe className='social-icons' />
                <FaSquareTwitter className='social-icons' />
              </div>
              <span className='shortTxt'>Add Your Social Media Above</span>
            </Col>
          </Row>
          }

          {/* List NFTs */}
          {activeVal === 'val3' && <Row className="listRow">
            {slidesData.map((item, idx) => {
              return (

                <Col xs md="4" className='listNFTDiv flex-aligned-center'>
                  <img src={NFT1} alt="nft image" className="imgListNFT" />

                  <h3 className='nftTitle'>{item.title}</h3>
                  <p className='txtListDiv'>{item.text}</p>
                  <p className='priceTxt'>
                    Min Price : ${item.price}
                  </p>
                </Col>
              )
            }
            )}
          </Row>
          }
        </Container>
      </div >
    </>
  )
}

export default Collection