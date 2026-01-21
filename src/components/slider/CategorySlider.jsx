import React, { useEffect, useRef, useState } from "react";
import cricketIMG from "../../assets/cricket.png"
import CarromCateg2 from "../../assets/carrom.png"
import FootballCateg2 from "../../assets/FootballCateg2.png"
import KitsCateg6 from "../../assets/basketball.png"
import TennisCateg4 from "../../assets/TennisCateg4.png"
import TracksuitsCateg5 from "../../assets/tracksuits.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoryCard from "../cards/CategoryCard";
// import { CategoryCard } from "../cards/category-card";
// import axios from "axios";
// import baseURL from "../../services/constant";

const categories = [
    {
        title: "Cricket",
        desc: "Bats, Balls & More",
        image: cricketIMG
    },
    {
        title: "Tennis",
        desc: "Rackets & accessories",
        image: TennisCateg4
    },
    {
        title: "Football",
        desc: "Premium Football gear",
        image: FootballCateg2
    },
    {
        title: "Carrom",
        desc: "Boards & Strikers",
        image: CarromCateg2
    },
    {
        title: "Basketball",
        desc: "Premium Basketball gear",
        image: KitsCateg6
    },
    {
        title: "Track Suits",
        desc: "Comfortable sportswear",
        image: TracksuitsCateg5
    },
    {
        title: "Basketball",
        desc: "Premium Basketball gear",
        image: KitsCateg6
    },
    {
        title: "Track Suits",
        desc: "Comfortable sportswear",
        image: TracksuitsCateg5
    },

]

export default function CategorySlider() {
    const swiperRef = useRef(null);
    //    const [category, setCategory] = useState([]);

    //    const getCategories = async () => { 
    //      try {
    //        let response = await axios.get( `${baseURL}/category/api/get-category`);
    //        let data = response.data.data;

    //        console.log(data);
    //        setCategory(data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }

    //    useEffect(() => {
    //     getCategories()
    //    }, [])

    //    useEffect(() => {
    //   console.log("Updated category state:", category);
    // }, [category]);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <>
            <div className={`swiper_button_container mb-3 `}>
                <div className={`nav_btn max-[500px]:mt-10`} onClick={goPrev}>
                    <FaArrowLeft />
                </div>
                <div className={`nav_btn max-[500px]:mt-10`} onClick={goNext}>
                    <FaArrowRight />
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    490: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    992: { slidesPerView: 5, spaceBetween: 30 },
                    1200: { slidesPerView: 6, spaceBetween: 40 },
                }}
                className="mySwiper"
            >
                {categories.map((item, key) => (
                    <SwiperSlide key={key} className="d-flex justify-center max-[490px]:mx-auto ">
                        <CategoryCard id={item._id} title={item.title} image={item.image} description={item.desc} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
