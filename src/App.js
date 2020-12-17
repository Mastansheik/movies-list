import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import CardUi from "./cardsUi";

function App() {
  const [Value, setValue] = useState("");
  const [response, setReponse] = useState([]);
  const [userMessage, setuSerMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  const handelMovieTitle = (e) => {
    setuSerMessage(false);
    setValue("");
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleSearch = () => {
    setLoader(true);
    setReponse([]);

    let options = {
      method: "GET",
      url: `//www.omdbapi.com/?s=${Value}`,
      params: { apikey: 66071899 },
    };

    axios
      .request(options)
      .then((res) => {
        if (res.data.Error) {
          setuSerMessage(true);
        } else {
          setReponse(res.data.Search);
          setLoader(false);
        }
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="app">
        <div className="mydiv">
          <span>Movies</span>
          <input type="text" value={Value} onChange={handelMovieTitle} />
          <button onClick={handleSearch} disabled={Value ? false : true}>
            Search
          </button>
        </div>
      </div>
      <>
        <div className="container-fluid d-flex jsutify-content-center">
          <div className="row">
            {response?.length > 0 ? <CardUi movies={response} /> : null}
          </div>
        </div>
      </>
      {userMessage ? (
        <p style={{ color: "red", textAlign: "center" }}>
          {`We're having trouble playing this ${Value} title right now`}
        </p>
      ) : null}
    </>
  );
}

export default App;
