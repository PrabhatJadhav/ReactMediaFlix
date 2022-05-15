import React from "react";
import img1 from "../Media/Images/children-img.png";
import { motion } from "framer-motion";

function Kids() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="container-fluid bg-black height d-flex align-items-center border-btm">
        <div className="row ">
          <div className="col-10 mx-auto justify-content-center">
            <div className="row d-flex justify-content-center">
              <div
                className="col-md-6 pb-5 pt-lg-0 d-flex flex-column order-2 order-lg-1 mt-5 flex-column
              "
              >
                <h1 className="color-white fw-bold mb-4">
                  Create profiles for children.
                </h1>
                <h4 className="color-white fw-bold mb-4">
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </h4>
              </div>
              <div className="col-lg-6 order-2 order-lg-2 mb-4">
                <img src={img1} className="img-fluid animate" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Kids;
