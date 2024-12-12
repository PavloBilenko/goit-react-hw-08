// src/components/DeleteModal.js
import Modal from 'react-modal';

const DeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Deletion"
      ariaHideApp={false}
    >
      <h2>Are you sure?</h2>
      <p>Do you really want to delete this contact?</p>
      <button onClick={onConfirm}>Yes, delete</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;
