import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
