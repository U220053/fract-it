// components/Modal.js
import { useState, useEffect } from "react";

export default function Modal({ children, isOpen, onClose }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setModalIsOpen(isOpen); // Update modal state when prop changes
  }, [isOpen]);

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
    onClose(); // Call onClose function passed from parent component
  };

  return (
    <>
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
