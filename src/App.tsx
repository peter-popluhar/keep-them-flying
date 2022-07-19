import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Results from "./components/result";
import LandingPage from "./components/landing-page";
import Form from "./components/form";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage>
                <Banner>
                  <Form />
                </Banner>
              </LandingPage>
            }
          />
          <Route path="results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
