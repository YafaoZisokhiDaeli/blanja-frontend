import React, { useEffect } from "react";
import "./profil.css";
import profil from "../../../assets/image/profilBig.png";
import home from "../../../assets/image/seling-product/home (2) 1.png";
import pekage from "../../../assets/image/seling-product/package 1.png";
import shoping from "../../../assets/image/seling-product/shopping-cart (3) 1.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import axios from "axios";


const Profil = ({
  titleOne,
  titleTwo,
  titleThere,
  imgOne,
  imgTwo,
  imgTheree,
  children,
}) => {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    datas();
  }, []);

  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}user/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response.data.data.fullname);
  };
  console.log(user);
  return (
    <div className="select-profil w-20">
      <div className="profil-avatar">
        <table>
          <tbody>
            <td className="align-middle image">
              <img
                className="rounded-circle image"
                width={75}
                height={70}
                src={profil}
                alt="img"
              />
            </td>
            <td className="align-middle float-start image-text">
              <p className="post mb-2 ms-2">{user.fullname}</p>
              <p className=" edit-profil mt-2 ms-2">
                {user.email}
              </p>
              <p className="post mb-1 ms-2">{user.role}</p>
            </td>
          </tbody>
        </table>
      </div>
      <div className="profil-select mt-5">
        <ul className="list-unstyled ps-0 mt-2">
          <li className="mb-1">
            <button className="btn btn-acount">
              <img src={imgTwo} alt="" />
            </button>
            <Link to="/productList" >
              <button
                className="btn btn-toggle title-dashboard d-inline-flex align-items-center rounded border-0 collapsed text-secondary"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-expanded="false"
              >
                <span className="text-profil">{titleTwo}</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

Profil.defaultProps = {
  titleOne: "Store",
  titleTwo: "Products",
  titleThere: "Orders",
  imgOne: home,
  imgTwo: pekage,
  imgTheree: shoping,
};
export default Profil;
