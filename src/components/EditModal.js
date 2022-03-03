import React from "react";
import { Modal } from "react-bootstrap";

const EditModal = ({ show, handleClose }) => {
  return (
      <div>this is EditModal
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div>This is EditModal</div>
      </Modal.Body>
    </Modal>
    </div>
  );
};
export default EditModal;