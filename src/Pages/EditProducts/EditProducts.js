import axios from "axios"
import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Swal from "sweetalert2"

function ModalEdit({ id, name, stock, price, description, category_id }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [data, setData] = useState({
    id,
    name,
    stock,
    price,
    description,
    category_id
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
    console.log(data);
  }

  const handleCreate = (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("stock", data.stock)
    formData.append("price", data.price)
    formData.append('description', data.description)
    formData.append("photo", photo)
    formData.append('category_id', data.category_id)
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}products/${data.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        Swal.fire({
          title: "Updated",
          text: "Products Updated.",
          icon: "success"
        })
        setShow(false);
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          title: "Updated Error!!",
          text: "Updated failed.",
          icon: "error"
        })
        setShow(false)
      })
  }

  return (
    <>
      <button className="btn btn-primary text-light" style={{ marginRight: "10px" }} onClick={handleShow}>
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" value={data.name} onChange={handleChange} />
            <input className="form-control mt-3" type="number" placeholder="stock" name="stock" value={data.stock} onChange={handleChange} />
            <input className="form-control mt-3" type="number" placeholder="price" name="price" value={data.price} onChange={handleChange} />
            <input className="form-control mt-3" type="file" placeholder="photo" name="photo" onChange={handleUpload} />
            <input className="form-control mt-3" type="text" placeholder="description" name="description" value={data.description} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="Category ID" name="category_id" value={data.category_id} onChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default ModalEdit