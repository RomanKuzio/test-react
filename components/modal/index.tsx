import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: any;
  width: number;
}

const customStyles = {
  content: {
    overflow: "hidden",
    inset: "30px 70px",
    borderRadius: "16px",
  },
  overlay: { zIndex: 10000, background: "rgba(0,0,0,0.4)" },
};

const customSmallStyles = {
  content: {
    overflow: "hidden",
    inset: "30px 30px",
    borderRadius: "16px",
  },
  overlay: { zIndex: 10000 },
};

const ModalWindow = (props: ModalProps) => {
  const { isOpen, onClose, content, width } = props;
  return (
    <Modal
      isOpen={isOpen}
      style={width < 680 ? customSmallStyles : customStyles}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      {content}
    </Modal>
  );
};

export default ModalWindow;
