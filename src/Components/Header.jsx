import React from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";
const Header = () => {
  return (
    <div className="app_header">
      <div className="header">
        <div className="app_logo">
          <img
            className="logo"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </div>
        <div className="header_menu">
          <div className="header_menu_item">
            <button className="homepage_menu">
              <Link className="homepage_menu_links" to="/applicants">Applicants</Link>
            </button>
          </div>
          <div className="header_menu_item">
            <button className="homepage_menu">
              <Link className="homepage_menu_links" to="/shortlisted">Shortlisted</Link>
            </button>
          </div>
          <div className="header_menu_item">
            <button className="homepage_menu">
              <Link className="homepage_menu_links" to="/rejected">Rejected</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
