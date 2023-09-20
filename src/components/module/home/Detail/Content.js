/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import "./StyleDetail.css"
import { useParams, Link, useNavigate } from "react-router-dom"
import retanggle from "../../../../assets/image/detail products/Rectangle 21.png"
import shape from "../../../../assets/image/detail products/Shape (1).png"
import { addMycart } from "../../../../configs/redux/actions/bagAction"
import { FormatRupiah } from "@arismun/format-rupiah"
import axios from "axios"

const Content = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}products/${id}`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddBag = async (detailProductId, navigate) => {

    const data = {
      productId: detailProductId,
      qty: 1,
    };
    // dispatch()
    addMycart(data, navigate);
  };
  const [count, setCount] = useState(1);
  const handleSum = () => {
    setCount(count + 1);
  };
  const handleMin = () => {
    setCount(count - 1);
  };
  const [countSize, setCounts] = useState(1);
  const handleSums = () => {
    setCounts(countSize + 1);
  };
  const handleMins = () => {
    setCounts(countSize - 1);
  };
  return (
    <div>
      {/* {(products.data).length === 0 ? (
        <div class="text-center">
          <FontAwesomeIcon icon={faSpinner} spin />
          &nbsp;Loading
        </div>
      ) : ( */}
      <div className="container child-page">
        <div className="row mt-3">
          <div className="col-lg-5">
            <div className="galleries">
              <div className="galleries-container">
                <img src={products.photo} className="w-100" alt="" />
              </div>
              <div className="thumb mt-3 text-center">
                <a
                  href="../image/detail products/secondary1.png"
                  className=""
                >
                  <img src={products.photo} alt="" />
                </a>
                <a
                  href="../image/detail products//secondary2.png"
                  className="ms-2"
                >
                  <img src={products.photo} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (1).png"
                  className="ms-2"
                >
                  <img src={products.photo} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (2).png"
                  className="ms-2"
                >
                  <img src={products.photo} alt="" />
                </a>
                <a
                  href="../image/detail products/image2 (3).png"
                  className="ms-2"
                >
                  <img src={products.photo} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6  ms-2">
            <div className="title-product">
              <h3 className="product-title mt-3">{products.name}</h3>
              <p className="text-secondary sub-title mt-3">{products.merk}</p>
              <div className="d-flex justify-content-start text-warning start mt-3">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <p className="rating  mt-2 ms-1 text-dark">(10)</p>
              </div>
            </div>
            <div className="price-products mt-5">
              <p className="mb-3 title-price">Price</p>
              <h3 className="price-detail mt-3">
                <FormatRupiah value={products.price} />
              </h3>
            </div>
            <div className="color-products mt-5 mb-2">
              <p className="title-color">Color</p>
              <div className="d-flex justify-content-start start mt-4">
                <div className="d-flex  align-items-center btn-border">
                  <button className="btn btn-black"></button>
                </div>
                <button className="btn btn-red"></button>
                <button className="btn btn-blue"></button>
                <button className="btn btn-green"></button>
              </div>
            </div>
            <div className="size mt-5">
              <div className="d-flex justify-content-start ms-1 text-black">
                <p className="title-size">Size</p>
                <p className="title-jumlah ms-5 text-black">Jumlah</p>
              </div>
              <div className="d-flex justify-content-start mt-1 ms-2">
                <div className="d-flex btn-min btn" onClick={handleMins}>
                  <img src={retanggle} className="m-auto icon" alt="" />
                </div>
                <p className="ms-2 me-2 mt-1 size">{countSize}</p>
                <div className="d-flex btn-max btn" onClick={handleSums}>
                  <img src={shape} className="m-auto icon" alt="" />
                </div>
                <div className="d-flex btn-min btn ms-5" onClick={handleMin}>
                  <img src={retanggle} className="m-auto icon" alt="" />
                </div>
                <p className="ms-2 me-2 mt-1 size">{count}</p>
                <div className="d-flex btn-max btn" onClick={handleSum}>
                  <img src={shape} className="m-auto icon" alt="" />
                </div>
              </div>
            </div>
            <div className="submit mt-5 mb-5">
              <div className="d-flex justify-content-start  ms-1">
                <div className="col-lg-3 ">
                  <button className="btn btn-chat">Chat</button>
                </div>
                <div className="col-lg-4 ms-1">
                  <Link to="/Bag">
                    <button
                      className="btn btn-bag"
                      onClick={() => {
                        console.log(products.data.id);
                        handleAddBag(products.data.id, navigate);
                      }}
                    >
                      Add bag
                    </button>
                  </Link>
                </div>
                <div className="col-lg-5 ms-1">
                  <Link to="/Checkout">
                    <button className="btn btn-buy">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <h3 className="title-info">Informasi Produk</h3>
            <h4 className="mt-4 text-sub">Condition</h4>
            {/* <p className="text-danger new">{typestock}</p> */}
            <p className="text-sub">Description</p>
            <div className="text ms-1 text-secondary">
              <p>{products.description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Content;
