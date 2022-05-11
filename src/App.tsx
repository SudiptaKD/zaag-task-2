import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Capital from "./components/Capital";
import Country from "./components/Country";
import Search from "./components/Search";

function App() {
  const [country, setCountry] = useState<string>("");
  const [capital, setCapital] = useState<string>("");

  const handleCountry = (x: string): void => {
    setCountry(x);
  };
  const handleCapital = (x: string): void => {
    setCapital(x);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search handleCountry={handleCountry} />} />
          <Route
            path="/country"
            element={
              <Country country={country} handleCapital={handleCapital} />
            }
          />
          <Route
            path="/capital-weather"
            element={<Capital capital={capital} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
