import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import filter from "../../../assets/image/filter.png"
import "./style.css"


function ModalFilter() {
  const values = 'md-down';
  const [fullscreen, setFullscreen] = useState("md-down");
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  function handleClose(breakpoint) {
    setShow(false)
  }

  return (
    <>

      <Button className='btn-filter' onClick={() => handleShow(values)}>
        <img src={filter} />
      </Button>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="modal-body"> */}
          <p>Colors</p>
          <ul>
            <li>
              <Button className="colorBtn B1" ><div className="color"></div></Button>
            </li>
            <li>
              <Button className="colorBtn B2"><div className="color bg-white"></div></Button>
            </li>
            <li>
              <Button className="colorBtn B3"><div className="color bg-danger"></div></Button>
            </li>
            <li>
              <Button className="colorBtn B4"><div className="color bg-primary"></div></Button>
            </li>
            <li>
              <Button className="colorBtn B5"><div className="color"></div></Button>
            </li>
          </ul>
          {/* </div> */}
          {/* <div className="modal-body"> */}
          <h2>Sizes</h2>
          <ul>
            <li>
              <Button className="btn1 size">XS</Button>
            </li>
            <li>
              <Button className="btn2 size">S</Button>
            </li>
            <li>
              <Button className="btn3 size">M</Button>
            </li>
            <li>
              <Button className="btn4 size">L</Button>
            </li>
            <li>
              <Button className="btn5 size">XL</Button>
            </li>
          </ul>
          {/* </div> */}
          {/* <div className="modal-body"> */}
          <h2>Category</h2>
          <ul>
            <li>
              <Button className="col-3 category" id="btn6">All</Button>
            </li>
            <li>
              <Button className="col-3 category" id="btn7">Women</Button>
            </li>
            <li>
              <Button className="col-3 category" id="btn8">Men</Button>
            </li>
            <li>
              <Button className="col-3 mt-1 category" id="btn9">Boys</Button>
            </li>
            <li>
              <Button className="col-3 mt-1 category" id="btn10">Girls</Button>
            </li>
          </ul>
          <h2>Brand</h2>
          <p>Don Jarot's, Black Dragon, Last Wolf</p>
        </Modal.Body>
        <Modal.Footer className='btn-footer'>
          <Button className="mr-5 rounded-pill mr-auto btn-Discard " data-dismiss="modal" aria-label="Close" onClick={handleClose}>Discard</Button>
          <Button className="mr-5 bg-success rounded-pill btn-Apply " data-dismiss="modal" aria-label="Close">Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFilter