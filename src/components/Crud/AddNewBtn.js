import { ToastContainer, toast } from "react-toastify";
import NewCompanyForm from "./NewCompanyForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { server } from "../../Data/APIs";
import NewUserForm from "./NewUserForm";
import { useState } from "react";
import axios from "axios";

export default function AddNewBtn({ type }) {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = (formData) => {
    if (type === "user") {
      setData({
        userName: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        whatsApp: formData.secondNumber,
        street: formData.street,
        area: formData.state,
        city: formData.gov,
        email: formData.email,
        password: formData.password,
        profilePicture:
          "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      });
    } else {
      setData({
        title: formData.title,
        description: formData.description,
        logo: formData.logo,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        website: formData.website,
        street: formData.street,
        area: formData.state,
        city: formData.gov,
      });
    }
    axios
      .post(server.register, data)
      .then((res) => {
        toast.success(res.response.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
    setShow(false);
  };

  return (
    <>
      <Button variant="success" className=" m-1" onClick={handleShow}>
        أضافة عنصر
      </Button>
      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title>
            {type === "user" ? "أضافة مستخدم" : "أضافة شركة"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === "user" ? (
            <NewUserForm submitHandler={submitHandler} />
          ) : (
            <NewCompanyForm submitHandler={submitHandler} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            الغاء
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}