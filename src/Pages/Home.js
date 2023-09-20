import React, { useEffect } from "react";
import Navbar from "../components/module/home/navbar/Navbar";
import Category from "../components/module/home/Category/Category";
import Populer from "../components/module/home/popular/Populer";
import Footer from "../components/module/home/footer/Footer";
import Card from "../components/base/Card";
import Carausel from "../components/module/home/Caraousel/Carausel";
import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import { useState } from "react";
import "./style.css"


const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}products`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Carausel />
      <Category />
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p>What are you currently looking for</p>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 ">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
                  src={item.photo}
                  to={`/detail/${item.id}`}
                  titleName={item.name}
                  price={<FormatRupiah value={item.price} />}
                  merk={item.merk}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Populer />
      <Footer />
    </div>
  )
}

export default Home;
