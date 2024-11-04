// Modal.js
import React from 'react';

const Modal = ({ onClose, totalPrice }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
      <p className="mb-4 text-lg">Total Cost: ${totalPrice}</p>
      <p className="mb-6">Your items will be delivered soon.</p>
      <button 
        onClick={onClose} 
        className="btn bg-blue-500 text-white font-bold px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
);

export default Modal;
