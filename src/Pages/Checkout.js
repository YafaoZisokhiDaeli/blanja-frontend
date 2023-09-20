import React from 'react'
import Navbar from "../components/module/home/navbar/Navbar";
import Check from "../components/module/Cart/Checkout";
import Footer from '../components/module/home/footer/Footer';
const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Check />
      <Footer />
    </div>
  );
};

export default Checkout;