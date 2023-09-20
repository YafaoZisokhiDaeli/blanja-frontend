import React, { useState } from "react";
import Total from "../Total/Total";
import "../home/StyleHome.css";
import { useSelector } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Modal, Button, Form } from "react-bootstrap";

const Checkout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [qty, setQty] = useState()
  const { cart } = useSelector((state) => state.bag);


  console.log(cart);
  const { user } = useSelector((state) => state.auth);
  let totalHarga = 0;
  for (let i = 0; i < cart.length; i++) {
    totalHarga += cart[i].price * cart[i].qty;
  }

  return (
    <div className="container my-check">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <h3 className="title-bag">Checkout</h3>
      <p className="sub-chekout">Shipping Adress</p>
      <div className="row ">
        <div className="col-lg-8 pl-lg-0">
          <div className="card mb-3 ">
            <div className="card-body">
              <h4>{user.name}</h4>
              <p>
                Perum. Bumi Citra Lestari JL.Sadewa raya 11 Blok E.14 No.1 Rt/Rw 017/014 Ds.Waluya Kec.Cikarang Utara Kab.Bekasi
              </p>
              <button
                className=" btn btn-address"
                variant="primary"
                onClick={handleShow}
              >
                {/* <Modal/> */}
                Choose another address
              </button>
            </div>
          </div>
          {cart.map((item) => (
            <div className="card mb-3 ">
              <div className="table-responsive-sm">
                <table className="table">
                  <tbody>
                    <td className="align-middle text-center ">
                      <img
                        className="img-products"
                        src={item.image}
                        alt="checkout"
                      />
                    </td>
                    <td className="align-middle">
                      <p className="post mb-1">{item.name}</p>
                      <span className="text-secondary sub-post">
                        {item.merk}
                      </span>
                    </td>
                    <td className="align-middle text-start">
                      quantity : {item.qty}
                    </td>
                    <td className="align-middle text-start text-white">
                      {/* { item.qty} */}
                      Lorem
                    </td>
                    <td className="align-middle price">
                      {" "}
                      <FormatRupiah value={item.price * item.qty} />
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <Total
          totalPrice="Order"
          shopping="Shopping Payment"
          Sumprice={<FormatRupiah value={totalHarga} />}
          priceBag={<FormatRupiah value={totalHarga} />}
          deleveri="Deleveri"
          price="Free Ongkir"
        >
          <select

            className="form-select w-100 mt-1 mb-4 mt-5"
          >
            <option>Select Payment</option>
            <option value="BRI">COD</option>
            <option value="OVO">OVO</option>
            <option value="Mandiri">Akulaku</option>
            <option value="BCA">BCA</option>
          </select>
          <button className="mt-3 w-100 btn btn-checkout">
            Buy
          </button>
        </Total>
      </div>
    </div>
  );
};

export default Checkout;
