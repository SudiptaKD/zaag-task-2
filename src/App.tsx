import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Search from "./components/Search";

function App() {
  const [country, setCountry] = useState<string>("");

  const handleCountry = (x: string): void => {
    setCountry(x);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Search handleCountry={handleCountry} />} />
          <Route path="/country" element={<Country country={country} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
