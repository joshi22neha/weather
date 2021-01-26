import "./weather.css";
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Result from "./Result";

const App = () => {
  const [term, setTerm] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onTermSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <form onSubmit={onTermSubmit} className="d-flex">
          <div className="search-bar">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Start Searching..."
              aria-label="Search"
            />
          </div>
          <div className="search-button">
            <button
              onClick={toggle}
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <Result term={term} modal={modal} setModal={setModal} toggle={toggle} />
    </div>
  );
};

export default App;
