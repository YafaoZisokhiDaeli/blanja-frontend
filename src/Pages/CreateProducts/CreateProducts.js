import axios from "axios"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Swal from "sweetalert2"


function ModalCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    name: "",
    stock: "",
    price: "",
    description: "",
    category_id: ''
  })

  const [photo, setPhoto] = useState(null)

  const handleUpload = (e) => {
    setPhoto(e.target.files[0])
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
    console.log(data)
  }

  const handleCreate = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('stock', data.stock)
    formData.append('price', data.price)
    formData.append('description', data.description)
    formData.append('photo', photo)
    formData.append('category_id', data.category_id)
    axios
      .post(process.env.REACT_APP_API_BACKEND + "products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success",
          text: "Your your Products created.",
          icon: "success"
        })
        setShow(false)
      })
      .catch((err) => {
        console.log(err);
        alert(err)
        setShow(false)
      })
  }

  return (
    <>
      <button className="btn btn-warning mt-5 text-white" onClick={handleShow}>
        Create
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="Name" name="name" value={data.name} onChange={handleChange} />
            <input className="form-control mt-3" type="number" placeholder="Stock" name="stock" value={data.stock} onChange={handleChange} />
            <input className="form-control mt-3" type="number" placeholder="Price" name="price" value={data.price} onChange={handleChange} />
            <input className="form-control mt-3" type="file" placeholder="Photo" name="photo" onChange={handleUpload} />
            <input className="form-control mt-3" type="text" placeholder="Description" name="description" value={data.description} onChange={handleChange} />
            {/* <input className="form-control mt-3" type="text" placeholder="Category" name="category_id" value={data.category_id} onChange={handleChange} /> */}
            <select name="category_id" className="form-control mt-3" value={data.category_id} onChange={handleChange}>
              <option> Select Category</option>
              <option value="1">Electronics</option>
              <option value="2">Clothes</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">Create</button>
          </Modal.Footer>
        </form>
      </Modal >
    </>
  )
}

export default ModalCreate;
