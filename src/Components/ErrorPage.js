import React from "react";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="height bg-black border-btm pt-5"
    >
      <h1 className="color-crimson">Error 404</h1>
      <h2 className="color-crimson">Page Not Found</h2>
    </motion.div>
  );
}

export default ErrorPage;
