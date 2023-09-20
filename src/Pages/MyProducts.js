import React,{Fragment, useEffect,useState} from 'react'
import Navbar from '../components/module/home/navbar/Navbar'
import Card from "../components/base/Card";
import { useSearchParams } from 'react-router-dom';
import axios from "axios"
import "./style.css"
import "../Pages/Page404/page.css"


const MyProducts = () => {
const [searchParams, setSearchParams] = useSearchParams([]);
const [product, setProduct] = useState([])
const getProducts = async () => {
  axios
    .get(
      `${process.env.REACT_APP_API_BACKEND}products/cari?${searchParams}`
    )
    .then((res) => {
      console.log(res.data.data);
      setProduct(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
  useEffect(() => {

    getProducts();
    searchParams.get("search");
  }, [ searchParams ]);



  return (
    <Fragment>
      <Navbar />
      <div className="container h-100">
        <div className="row">
          <div className="products">
            <h3 className="title">New</h3>
            <p className="mt-5">Result Search</p>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {product.length > 0 ? (
              product.map((item) => (
                <div className="col" key={item.id}>
                  <Card
                    src={item.photo}
                    to={`/detail/${item.id}`}
                    titleName={item.name}
                    price={item.price}
                    merk={item.merk}
                  />
                </div>
              ))
            ) : (
              <div className="text-center m-auto  h-100 ">
                <h2>Sorry... Data not found</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
      <footer className="py-3 bg-dark mt-5 footer-dekstop fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
    </Fragment>
  );
}

export default MyProducts