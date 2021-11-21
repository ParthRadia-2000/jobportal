import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../Styles/applicants.css";

import { toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
const Applicants = () => {
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [id, setId] = useState([]);
  const handleSuccess = () => {
    toast.success("Application Accepted...", {
      position: "top-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    //window.location.assign("http://localhost:3000/");
  };
  const handleRejection = () => {
    toast.error("Application Rejected...", {
      position: "top-center",
      autoClose: 9000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.assign("http://localhost:3000/");
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
        );
        var data = await JSON.parse(JSON.stringify(response.data));
        data.forEach((element) => {
          setName((name) => [...name, element.name]);
          setImage((image) => [...image, element.Image]);
          setId((id) => [...id, element.id]);
        });
        //console.log(JSON.parse(JSON.stringify(response.data)));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      "done";
    };
  }, []);

  return (
    <div className="applicants">
      <Header />
      <div className="applicants_list">
        {name.map((entry, index) => (
          <div className="applicant_details">
            <div className="applicants_image">
              <img
                className="applicant_profile_image"
                src={`${image[index]}`}
                alt="applicant_profile"
              />
            </div>
            <div className="applicants_name">{name[index]}</div>
            <div className="appropriate_action">
              <button className="view_button">
                <Link
                  id="view_button_url"
                  to={{
                    pathname: `${id[index]}${name[index]}`,
                  }}
                  target="_blank"
                >
                  View
                </Link>
              </button>
              <button className="selection_button" onClick={handleSuccess}>
                Accept
              </button>
              <button className="rejection_button" onClick={handleRejection}>
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicants;
