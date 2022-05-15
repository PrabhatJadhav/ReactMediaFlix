import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="height bg-black pt-4 border-btm"
    >
      <p className="m-0">
        <button
          className="btn about-btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          What is MediaFlix
        </button>
      </p>
      <div className="collapse" id="collapseExample1">
        <div className="card card-body">
          MediaFlix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want, without a single ad all for one low monthly
          price. There's always something new to discover, and new TV shows and
          movies are added every week!
        </div>
      </div>
      <p className="m-0">
        <button
          className="btn about-btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample2"
          aria-expanded="false"
          aria-controls="collapseExample2"
        >
          What is the cost for MediaFlix ?
        </button>
      </p>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body">
          Watch MediaFlix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from ₹
          149 to ₹ 649 a month. No extra costs, no contracts.
        </div>
      </div>
      <p className="m-0">
        <button
          className="btn about-btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample3"
          aria-expanded="false"
          aria-controls="collapseExample3"
        >
          Where can I watch
        </button>
      </p>
      <div className="collapse" id="collapseExample3">
        <div className="card card-body">
          Watch anywhere, anytime. Sign in with your MediaFlix account to watch
          instantly on the web at MediaFlix.com from your personal computer or
          on any internet-connected device that offers the MediaFlix app,
          including smart TVs, smartphones, tablets, streaming media players and
          game consoles. You can also download your favourite shows with the
          iOS, Android, or Windows 10 app. Use downloads to watch while you're
          on the go and without an internet connection. Take MediaFlix with you
          anywhere.
        </div>
      </div>
      <p className="m-0">
        <button
          className="btn about-btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample4"
          aria-expanded="false"
          aria-controls="collapseExample4"
        >
          Is MediaFlix good for Kids
        </button>
      </p>
      <div className="collapse" id="collapseExample4">
        <div className="card card-body">
          The MediaFlix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and films in
          their own space. Kids profiles come with PIN-protected parental
          controls that let you restrict the maturity rating of content kids can
          watch and block specific titles you don't want kids to see.
        </div>
      </div>
    </motion.div>
  );
}

export default About;
