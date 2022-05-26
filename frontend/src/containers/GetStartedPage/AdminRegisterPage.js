import React, { useState, useEffect } from "react";
import "../../styles/GetStartedPage/GetStartedRegister.css";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import CloseIcon from "@mui/icons-material/Close";
// import {
//   adminLoginAction,
//   adminLoginClean,
//   checkAdminLoginStatusClean,
// } from "../../actions/adminActions";
function AdminRegisterPage({ setAdminLogin, adminError }) {
  const navigate = useNavigate();
  const closeLogin = () => {
    setAdminLogin(false);
  };

  // admin state
  const [adminPass, setAdminPass] = useState();
  const saveAdminPass = (value) => {
    setAdminPass(value);
  };

  // USE
  //   const { loading, adminLogin, error } = useSelector(
  //     (state) => state.adminLoginReducer
  //   );

  // actions
  //   const dispatch = useDispatch();
  const adminLoginHandler = (e) => {
    e.preventDefault();
    // if (adminPass) {
    //   dispatch(adminLoginClean());
    //   dispatch(checkAdminLoginStatusClean());
    //   dispatch(adminLoginAction(adminPass));
    // }
  };

  // useeffect
  //   useEffect(() => {
  //     if (adminLogin === "success") {
  //       navigate("/admin");
  //     }
  //   }, [adminLogin, navigate, dispatch]);

  return (
    <div className="home__admin__login">
      <form action="">
        <div className="login__container">
          <div className="title__and__close">
            <div className="admin__login__title">Register</div>
            <div className="close__icon">
              <CloseIcon onClick={closeLogin}></CloseIcon>
            </div>
          </div>
          {adminError && (
            <Message variant="danger">
              {adminError === "adminLoginExpired"
                ? "Session expired. Please login again"
                : "Please login first"}
            </Message>
          )}

          <label htmlFor="admin__company__name" className="admin__login__label">
            Company<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="admin__company__name"
            onChange={(event) => {
              saveAdminPass(event.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="admin__email" className="admin__login__label">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="admin__email"
            onChange={(event) => {
              saveAdminPass(event.target.value);
            }}
            required
          />
          <br />

          <label htmlFor="admin__login" className="admin__login__label">
            Admin pass<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            id="admin__login"
            onChange={(event) => {
              saveAdminPass(event.target.value);
            }}
            required
          />
          <br />

          <div>
            <button
              className="login__employee__button"
              type="submit"
              onClick={adminLoginHandler}
            >
              Register
            </button>
          </div>
          {/* {loading && <Loader></Loader>}
          {error && <Message variant="danger">{error}</Message>} */}
        </div>
      </form>
    </div>
  );
}
export default AdminRegisterPage;
