import React from "react";
import Header from "./Header";
import "../Styles/homepage.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main_text">Employment you can trust.</div>
        <div className="main_image">
          <img
            className="main_page_image"
            src="https://www.parttimely.com/wp-content/uploads/2018/09/images-of-jobs.jpg"
            alt="main_page_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
