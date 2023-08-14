import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../styles/carousel.css";

import img1 from '../assets/work-img1.png';
import img2 from '../assets/work-img2.png';
import img3 from '../assets/work-img3.png';


function Carousel() {
    const [slide, setSlide] = useState(0);
    const slidesData = [
        {
            src: img1,
            alt: "Image 1 for carousel",
            title: "ST Jude’s Supply Fundraiser",
            text: "We are in need of clean equipments such as ... ",
            money_raised: "$11,253 out of $20,000",
            link: "",
        },
        {
            src: img2,
            alt: "Image 2 for carousel",
            title: "Cancer For College Fundraiser",
            text: "Funding 20 more scholarships towards ...",
            money_raised: "$4,800 out of $5,000",
            link: "",
        },
        {
            src: img3,
            alt: "Image 3 for carousel",
            title: "Flowers For The Future ",
            text: "Purchasing 50+  computers for Afghan ",
            money_raised: "$3,200 out of $10,000",
            link: "",
        }
    ]

    const nextSlide = () => {
        setSlide(slide === slidesData.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slidesData.length - 1 : slide - 1);
    };

    return (
        <>
            <div className="carousel">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {slidesData.map((item, idx) => {
                    return (
                        <div>
                            <div className={slide === idx ? "card-box" : "card-box slide-hidden"}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    key={idx}
                                    className="work-img"
                                />
                                <br className="line-break" />
                                <div className="text-head">
                                    {item.title}
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                            </div>

                        </div>
                    );
                })}
                <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className="arrow arrow-right"
                />
                {/* <span className="indicators">
                    {slidesData.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "indicator" : "indicator indicator-inactive"
                                }
                                onClick={() => setSlide(idx)}
                            ></button>
                        );
                    })}
                </span> */}
            </div>
        </>
    );
}

export default Carousel