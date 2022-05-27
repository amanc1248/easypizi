import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/screens/Admin.css";
import AdminProfile from "./AdminProfile";
import { adminByIdAction } from "../../actions/adminActions";
function AdminHeader() {
  const dispatch = useDispatch();

  const [adminProfile, setAdminProfile] = useState(false);
  const showAdminProfile = () => {
    setAdminProfile(true);
  };

  // useEffect
  useEffect(() => {
    dispatch(adminByIdAction());
  }, [dispatch]);

  // useselctor
  const { loading, adminById, error } = useSelector(
    (state) => state.adminByIdReducer
  );

  return (
    <div>
      {adminProfile && (
        <AdminProfile setAdminProfile={setAdminProfile}></AdminProfile>
      )}
      <Navbar expand="lg" bg="#F2EBD1" className="the__navbar">
        <div>
          <Navbar.Brand href="/admin">
            <div className="admin__brand__container">
              <span className="admin__brand__name">
                {adminById && adminById.company}
              </span>
            </div>
          </Navbar.Brand>
        </div>
        {/* INside the navbar.collapse will be everything which will be collapsed */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-lg-0 order-last"
        >
          <Nav.Link className="admin__header__icons first__header__link second__header__link">
            {/* <WorkIcon></WorkIcon> */}
            👷‍♀️👷‍♂️ Employees
          </Nav.Link>

          <Nav.Link>
            <img
              src="https://res.cloudinary.com/proudposhak-com/image/upload/v1650865920/aestheticproject/profile_image_3_c1jhqc.jpg"
              alt="profile"
              className="profile__image"
              onClick={showAdminProfile}
            />
          </Nav.Link>
        </Navbar.Collapse>

        <Navbar.Toggle
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
            <MenuIcon className="hamburger__icon"></MenuIcon>
          </span>
        </Navbar.Toggle>
      </Navbar>
    </div>
  );
}

export default AdminHeader;
