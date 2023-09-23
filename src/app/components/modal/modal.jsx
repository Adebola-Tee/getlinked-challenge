import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const Modal = ({ show, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(show);
  const modalRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center overflow-hidden">
          <div
            className="fixed inset-0 bg-[#150E28] opacity-95"
            onClick={handleClose}
          ></div>
          <div
            ref={modalRef}
            className="p-3 z-20 md:w-3/5 overflow-y-auto max-h-full"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
