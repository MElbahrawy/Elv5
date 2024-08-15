import { ToastContainer, toast } from "react-toastify";
import NewCompanyForm from "./NewCompanyForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { server } from "../../Data/APIs";
import NewUserForm from "./NewUserForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddNewBtn({ type }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addUser = (data) => {
    console.log(data);
    axios
      .post(server.register, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        toast.success(res.response?.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data);
      });
  };
  const addCompany = (data) => {
    const formData = new FormData(); // Append each field to the FormData object
    formData.append("companyName", data.companyName);
    formData.append("Description", data.Description);
    formData.append("companyLogo", data.companyLogo); // Append the file directly
    formData.append("companyEmail", data.companyEmail);
    formData.append("companyLink", data.companyLink);
    formData.append("companyPhone", data.companyPhone);
    formData.append("companyWhatsApp", data.companyWhatsApp);
    formData.append("companyLocation", data.companyLocation);
    formData.append("companyAddress", data.companyAddress); // Log the FormData keys for debugging

    for (let key of formData.keys()) {
      console.log(key, formData.get(key));
    }
    axios
      .post(server.createCompany, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.response?.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data);
      });
  };

  const submitHandler = (formData) => {
    let data = {};
    if (type === "user") {
      console.log("user");
      data = {
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
      };
      addUser(data);
    } else {
      data = {
        companyName: formData.title,
        Description: formData.description,
        companyLogo: formData.logo[0],
        companyEmail: formData.email,
        companyLink: formData.website,
        companyPhone: formData.phoneNumber,
        companyWhatsApp: formData.phoneNumber,
        companyLocation: formData.street,
        companyAddress: formData.gov,
      };
      const Data = new FormData();
      Data.append("file", formData.logo[0]);
      console.log(Data);
      addCompany(data);
      //   console.log(data);
    }
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
