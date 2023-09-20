import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import vektor from "../../assets/image/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../configs/redux/actions/userAction"

const Register = ({ label, ...props }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    role: "seller",
  });

  if (auth === user) {
    alert("updsss");
  }
  // console.log(user);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      role: "seller"
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signUp(user, navigate));
  };
  if (auth.id) return navigate("/login");

  return (
    <div className="container">
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4" src={vektor} alt="" />
          <h1 className="title-login mb-3">Please sign up with your account</h1>
          <ul className="nav nav-justified mb-4 mt-5" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <Link to="/register">
                <button className="w-100 btn costemers" type="submit">
                  Customer
                </button>
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <button className="w-100 btn seler" type="submit">
                Seller
              </button>
            </li>
          </ul>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-floating">
            <input
              id="floatingInput"
              name="fullname"
              type="text"
              {...props}
              value={user.fullname}
              onChange={handleChange}
              placeholder="Name"
              className="form-control mb-3"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingEmail"
              name="email"
              type="email"
              {...props}
              value={user.email}
              className="form-control mb-3 "
              placeholder="Email Address"
              onChange={handleChange}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              id="floatingPassword"
              name="password"
              type="password"
              {...props}
              className="form-control mt-3 "
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-sign mt-5" type="submit">
            Register
          </button>
          <label className="login mb-3 mt-4" for="">
            Don't have a Tokopedia account?
            <Link to="/login" className="page-login">
              Login
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};
export default Register;
