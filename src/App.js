import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgres] = useState(0);
  const [mode, setMode] = useState("white");

  const toggle = () => {
    if (mode === "white") {
      document.body.style.backgroundColor = "black";
      setMode("black");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("white");
    }
  };

  const setProgress = (progress) => {
    setProgres(progress);
  };

  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar toggle={toggle} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                pazgeSize={pageSize}
                apiKey={apiKey}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={25}
                apiKey={apiKey}
                key="Technology"
                category="Technology"
              />
            }
          />
          <Route
            exact
            path="/crypto"
            element={
              <News
                setProgress={setProgress}
                pageSize={pageSize}
                apiKey={apiKey}
                key="crypto"
                category="crypto"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
