import "./weather.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";

const Result = ({ submission, term, modal, setModal, toggle }) => {
  const token = "ab1f9e7f91651c4aad84f69d28fc8f9c";
  const [results, setResults] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const searchKeyword = async () => {
      try {
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/weather?",
          {
            params: {
              q: term,
              appid: token,
              units: "metric",
            },
          }
        );
        setResults(response.data);
        const imageResponse =
          "https://openweathermap.org/img/wn/" +
          response.data.weather[0].icon +
          "@2x.png";

        setImage(imageResponse);
      } catch (e) {
        setErrorMessage(e.message);
      }
    };
    if (submission) {
      searchKeyword();
    }
  }, [submission]);

  const resultOutput = () => {
    if (!results && !errorMessage) {
      return (
        <div>
          <p className="pageIntro">Type City name to search for data</p>
        </div>
      );
    } else {
      return (
        <Add
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          image={image}
          modal={modal}
          toggle={toggle}
          results={results}
          setModal={setModal}
          term={term}
        />
      );
    }
  };
  return <div>{resultOutput()}</div>;
};

export default Result;
