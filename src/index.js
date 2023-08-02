import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './views/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route, Routes,
  Link,
} from "react-router-dom";
import ListUsers from './views/Users/ListUsers';
import DetailUser from './views/Users/DetailUser'
import GetAllUsersFromAPI from './views/Users/GetAllUsersFromAPI';
import ListToDo from './views/ToDos/ListToDo';
import Home from './views/examples/Home'
import About from './views/examples/About'
import Contacts from './views/examples/Contacts';
//setup Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers/rootReducer'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Home />
      },

      {
        path: "todo",
        element: <ListToDo />,
      },
      {
        path: "about",
        element: <About />,
      }
      ,
      {
        path: "contacts/:id",
        element: <Contacts />,
      },
      {
        path: "users",
        element: <ListUsers />,
      },
      {
        path: "users/:id",
        element: <DetailUser />,
      },
      {
        path: "getAllUserAPI",
        element: <GetAllUsersFromAPI />,
      },
    ]
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//const reduxStore = configureStore({ reducer: rootReducer })
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />


    </Provider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
