import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function ToDo(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const removeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={removeModal} onConfirm={removeModal} />}
      {showModal && <Backdrop onClick={removeModal} />}
    </div>
  );
}
