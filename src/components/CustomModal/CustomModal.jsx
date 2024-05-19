import { useState } from "react";
import "./CustomModal.css";
import Modal from "./Modal";

const CustomModal = () => {
  // 1. Open a Modal on click of Button - isOpen(state)
  // 2. We have to pass header, footer, content and on close handler.

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Open Modal Component</button>
      {isModalOpen && (
        <Modal
          header={<header>Customized Header</header>}
          content={<div>Customized Content</div>}
          footer={<footer>Customized Footer</footer>}
          onClose={function onClose() {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default CustomModal;
