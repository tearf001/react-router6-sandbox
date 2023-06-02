import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/topics/*" element={<Topics />} />
      </Routes>
      <hr />
    </div>
  </Router>
);

const root = createRoot(document.getElementById("root"));

root.render(<BasicExample />);
