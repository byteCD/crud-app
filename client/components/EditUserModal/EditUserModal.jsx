import { Modal } from "react-bootstrap";
import EditUserForm from "../EditUserForm/EditUserForm";

const EditUserModal = ({ show, onHide, user }) => {
  const props = { show, onHide };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Редактировать пользователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditUserForm user={user} onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
