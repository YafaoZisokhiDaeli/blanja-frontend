import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/module/profil/profil.css";
import axios from "axios";
import Profil from "../../components/module/profil/Profil";
import Footer from "../../components/module/home/footer/Footer";
import Navbar from "../../components/module/home/navbar/Navbar";
import Swal from "sweetalert2";
import ModalCreate from "../CreateProducts/CreateProducts";
import ModalEdit from "../EditProducts/EditProducts";
import "./style.css"


const ProductList = () => {
  const [products, getProducts] = useState([]);
  const navigate = useNavigate();
  console.log(navigate);
  const [show, setShow] = useState(false);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const createdAt = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}products`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(createdAt.data.data);
      getProducts(createdAt.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    setShow(false)
    setShow(true)
  }, []);

  const deleteProducts = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32C33B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${process.env.REACT_APP_API_BACKEND}products/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            setShow(false)
          })
          .catch(() => {
            Swal.fire("Deleted Failed!!", "failed deleted products", "error");
            setShow(false)
          });
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container my-bag">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Profil />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">My Products</h4>

                <div className="d-flex flex-row bd-highlight mb-3">
                  <div className="p-2 bd-highlight text-success">All Products</div>
                  <hr />
                </div>
                <div className="input-group rounded nav-search w-100 mt-3 mx-auto">
                  <input type="search" className="form-control search-input " placeholder="Search" aria-label="Search" aria-describedby="search-addon" name="search" />
                  <span className="input-group-text search bg-light" id="search-addon">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <ModalCreate />
                  <button onClick={() => navigate("/")} className="btn btn-primary btn-home">
                    Back to home
                  </button>
                </div>

                <div className="table-responsive mt-4">
                  <table className="table">
                    <thead className="table-light">
                      <tr>
                        <th className="text-center">No</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Stock</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Image</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item, index) => (
                        <tr key={item.id}>
                          <td className="text-center">{index + 1}</td>
                          <td className="text-center">{item.name}</td>
                          <td className="text-center">Rp. {item.price}</td>
                          <td className="text-center">{item.stock}</td>
                          <td className="text-center">{item.description}</td>
                          <td className="text-center">
                            <img
                              src={item.photo}
                              alt=""
                              width={50}
                              height={55}
                            />
                          </td>
                          <td className="text-center">
                            <ModalEdit id={item.id} name={item.name} stock={item.stock} price={item.price} description={item.description} />
                            <button onClick={() => deleteProducts(item.id)} className="btn btn-danger mt-1">
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
