import logo from './logo.svg';

import MyComponent from './examples/MyComponent';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { createRoot } from "react-dom/client";
import { Outlet } from 'react-router';
import Header from './Nav/Nav';
import { connect } from "react-redux";


function App() {

  return (
    <div className="App">

      <div className="header"> <Header /></div>
      <div className='content'><Outlet /></div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
