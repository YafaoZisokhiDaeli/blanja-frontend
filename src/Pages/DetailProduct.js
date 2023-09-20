import React from 'react'
import Content from '../components/module/home/Detail/Content';
import InformasionProduct from '../components/module/home/Detail/InformasionProduct';
import Navbar from "../components/module/home/navbar/Navbar";
import Footer from "../components/module/home/footer/Footer";
import Product from '../components/module/home/newProduct/Product';

const DetailProduct = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <InformasionProduct />
      <Product
        title="You can also like this"
        subtitle="You’ve never seen it before!"
      />
      <Footer />
    </div>
  );
}

export default DetailProduct