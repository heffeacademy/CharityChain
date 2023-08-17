import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../../styles/carousel.css";

import img1 from '../../assets/work-img1.png';
import img2 from '../../assets/work-img2.png';
import img3 from '../../assets/work-img3.png';
import img5 from '../../assets/donor-img1.png';
import img4 from '../../assets/donor-img2.png';


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
        },
        {
            src: img4,
            alt: "Image 2 for carousel",
            title: "Cancer For College Fundraiser",
            text: "Funding 20 more scholarships towards ...",
            money_raised: "$4,800 out of $5,000",
            link: "",
        },
        {
            src: img5,
            alt: "Image 3 for carousel",
            title: "Flowers For The Future ",
            text: "Purchasing 50+  computers for Afghan ",
            money_raised: "$3,200 out of $10,000",
            link: "",
        }

    ]

    const nextSlide = () => {
        setSlide(slide + 3 >= slidesData.length ? 0 : slide + 3);
    };

    const prevSlide = () => {
        setSlide(slide - 3 < 0 ? slidesData.length - 3 : slide - 3);
    };

    return (
        <div className="page">
            <div className='page-head page-title'>
                Support Our Current Fundraisers
                <div>
                    <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                    <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
                </div>
            </div>
            <div className="carousel">
                {slidesData.map((item, idx) => {
                    if (idx >= slide && idx < slide + 3) {  // Only render slides that are in the current view
                        return (
                            <div key={idx}>
                                <div className="card-box">
                                    <img src={item.src} alt={item.alt} className="work-img" />
                                    <br className="line-break" />
                                    <div className="text-head">
                                        {item.title}
                                    </div>
                                    <div className="text">
                                        {item.text}
                                    </div>
                                    <br />
                                    <span className='info-button white-button adj'>
                                        Support Here
                                    </span>
                                </div>
                            </div>
                        );
                    }
                    return null;  // Return null for slides not in the current view
                })}
            </div>
        </div>

    );
}

export default Carousel