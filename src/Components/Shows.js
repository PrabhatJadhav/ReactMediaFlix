import React from "react";
import img1 from "./Media/Images/tom&jerry.webp";
import img2 from "./Media/Images/houseOfGucci.webp";
import img3 from "./Media/Images/kingRichard.webp";
import img4 from "./Media/Images/bacchanPandey.webp";
import img5 from "./Media/Images/kgfChp1.webp";
import show1 from "./Media/Images/show1.jpg";
import show2 from "./Media/Images/show2.jpg";
import show3 from "./Media/Images/show3.jpg";
import show4 from "./Media/Images/show4.jpg";
import show5 from "./Media/Images/show5.jpg";
import show6 from "./Media/Images/show6.jpg";
import show7 from "./Media/Images/show7.jpg";
import show8 from "./Media/Images/show8.jpg";
import { motion } from "framer-motion";

function Shows() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="height bg-black"
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid">
        <h4 className="mx-0 my-5 ps-3 border-btm color-crimson d-flex text-left">
          Trending Shows
        </h4>
        <motion.div
          className="row"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <div className="col-6 col-sm-3">
            <img src={show1} className="cards img-fluid " alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show2} className="cards img-fluid" alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show3} className="cards img-fluid" alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show4} className="cards img-fluid" alt="..." />
          </div>
        </motion.div>
      </div>

      <div className="container-fluid">
        <h4 className="mx-0 my-5 ps-3 border-btm color-crimson d-flex text-left">
          New & Upcoming
        </h4>
        <motion.div
          className="row"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 4, duration: 1.5 }}
        >
          <div className="col-6 col-sm-3">
            <img src={show5} className="cards img-fluid" alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show6} className="cards img-fluid" alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show7} className="cards img-fluid" alt="..." />
          </div>
          <div className="col-6 col-sm-3">
            <img src={show8} className="cards img-fluid" alt="..." />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Shows;
