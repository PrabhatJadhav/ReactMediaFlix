import React from "react";
import home_video from "../Media/Videos/home-video.m4v";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <section className="d-flex bg-black">
        <div className="container-fluid bg-img-home p-0">
          <div className="row mx-auto p-0 height bg-home">
            <div className="d-flex col-10 mx-auto justify-content-center">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1 className="mt-5 color-white fw-bold">
                  Unlimited Movies, TV Shows and More.
                </h1>
                <h2 className="mt-5 color-white fw-bold">
                  Watch anywhere. Cancel anytime.
                </h2>
                <h4 className="mt-5 color-white fw-bold">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h4>
                <div className="input-group mb-3 mt-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary bg-crimson color-black fw-bold"
                    type="button"
                    id="button-addon2"
                  >
                    Get Started!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-top-bottom">
        <div className="container-fluid bg-black p-0">
          <div className="row mx-auto p-0 height bg-home">
            <div className="flex-wrap d-flex col-10 mx-auto justify-content-between">
              <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 color-white d-flex flex-column justify-content-center">
                <h1 className="pb-3">Enjoy on your TV.</h1>
                <h2>
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h2>
              </div>
              <div className="d-flex container-fluid justify-content-center align-self-center col-md-6 pt-lg-0 order-2 order-lg-1 animate">
                <video
                  className="embed-responsive-item video-div"
                  autoPlay
                  loop
                  controls
                  src={home_video}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
