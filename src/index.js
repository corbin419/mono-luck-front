import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Home/Home";
import RegisterPage from "./RegisterPage/RegisterPage";
import SearchPage from "./Searchpage/Searchpage";
import FinishPage from "./RegisterFinishPage/RegisterFinishPage";
import SearchPageWait from "./SearchPageWait/SearchPageWait";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/RegisterFinishPage" element={<FinishPage />} />
        <Route path="/SearchPageWait" element={<SearchPageWait />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
