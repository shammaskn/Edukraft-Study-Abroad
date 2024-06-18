"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { Alert } from "reactstrap";
import toastr from "toastr";

const Modal = () => {
  const [master, setmaster] = useState({});

  function Submit(e) {
    const formEle = document.querySelector("form");
    
    e.preventDefault();
    const formData = new FormData(formEle);
    console.log(formData);
    fetch(
      "https://script.google.com/macros/s/AKfycbxJRmxVu5T0yTeoetr-RlSzJmVT17tmMSqaROZ73qrnNFRK7Oy-EKI7TwDiVMXPSs69/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        formEle.reset();
        console.log("Sdfsd");
        toast("Form Submitted Successfully");
      })
      .catch((err) => {
        toastr.error("Failed To Submit");
      });
  }

  return (
    <div>
      {" "}
      <div className="modal-body" style={{ padding: "0px 50px 3rem 50px" }}>
        <form onSubmit={(e) => Submit(e)}>
          <div style={{ textAlign: "center" }}>
            <h1 className="edumodal">Study Abroad Free Assessment</h1>
            <p className="edumodalpara">
              Fill in your details and we’ll be in touch
            </p>
            <input
              className="modal-input"
              type="text"
              placeholder="Name"
              name="Name"
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Email"
              name="Email"
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Phone"
              name="Phone"
            />
            <textarea
              className="modal-input"
              type="textarea"
              rows={5}
              name="Message"
              placeholder="Message"
            />
            <button type="submit" className="modalsubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
