import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import SearchForm from "./components/form";
import Results from "./components/result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchForm />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
