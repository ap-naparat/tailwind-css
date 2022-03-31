import React, { useState } from 'react';

const Modal = ({ title, content, handleShowModal, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none focus:outline-none">
      <div className="relative w-auto max-w-2xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <button 
                className="justify-end p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                onClick={() => handleShowModal(false)}
              >
                <span className="block w-6 h-6 text-3xl text-gray-400 bg-transparent outline-none opacity-0.8 focus:outline-none">
                  ×
                </span>
              </button>
          </div>
          <div className="relative flex-auto p-6">
            {/* <p className="my-4 text-lg leading-relaxed text-slate-500">
              
            </p> */}
            <div className="my-4 text-lg leading-relaxed text-slate-500">{children}</div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
          <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={() => handleShowModal(false)}
              >
                Close
              </button>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => handleShowModal(false)}
              >
                Save Changes
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;