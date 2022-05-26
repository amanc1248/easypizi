import React from "react";
import "../../styles/GetStartedPage/GetStartedPage.css";
const GetStartedPage = () => {
  return (
    <div className="getstarted__page">
      {/* navbar */}
      <div className="navbar">
        <div className="app__title">EasyPizi</div>
        <div className="admin__signin__title">Signin</div>
      </div>

      {/* get started section */}
      <div className="row get__started__section ">
        <div className="col text__section">
          <div className="text__section__title">
            Manage your employee & user all in one place.
          </div>
          <div className="text__section__subtitle">
            Admin can add, edit, delete employees and users all from one place.
            And employees can send any updates from their dashboard via mail
          </div>
          <div className="">
            <button className="get__started__button">Get Started</button>
          </div>
        </div>
        <div className="col image__section">
          <img
            src="https://res.cloudinary.com/proudposhak-com/image/upload/v1653551987/easypizi/busy-project-manager-overwhelmed-by-work_1_ogglay.png"
            alt="getstarted"
            className="getStarte__page__image"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
