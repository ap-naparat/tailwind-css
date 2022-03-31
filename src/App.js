import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="py-5 App">

      <button 
        className="px-4 py-2 mb-1 mr-4 text-sm text-white capitalize transition-all duration-200 ease-in-out bg-pink-500 rounded hover:bg-pink-600 hover:text-rose-50"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Love!
      </button>
      {showModal === true && (
        <Modal 
          title="Love or Like"
          handleShowModal={setShowModal}
        >
          <div>I always felt like I could do anything. That’s the main
          thing people are controlled by! Thoughts- their perception
          of themselves! They're slowed down by their perception of
          themselves. If you're taught you can’t do anything, you
          won’t do anything. I was taught I could do everything.</div>
        </Modal>
        
      )}
      <div className="flex items-center justify-center my-3">
        <div className="p-5 bg-white shadow-lg rounded-xl w-96">
          <h3 className="text-2xl text-center">Welcome to the world!</h3>
          <p className="my-4 text-left">Please login using your account</p>
          <p className="text-sm text-left text-gray-400">USERNAME</p>
          <input type="text" className="w-full p-2 my-2 rounded-lg bg-zinc-200" placeholder="name"/>
          <button className="w-full p-2 my-4 text-white uppercase bg-purple-600 rounded-lg hover:bg-purple-800">Login</button>
        </div>
        </div>
    </div>
  );
}

export default App;
