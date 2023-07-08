import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';
import App from './App';
import Home, { getDentistList } from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail, { detailLoader } from "./Routes/Detail";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
        loader: getDentistList,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dentist/:id",
        element: <Detail />,
        loader: detailLoader,
      },
      {
        path: "favs",
        element: <Favs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <ContextProvider>
        {/* <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="dentist/:id" element={<Detail />} />
            <Route path="favs" element={<Favs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes> */}
        <RouterProvider router={router} />
      </ContextProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
