import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Personal } from "./Steps/Personal";
import { Contact } from "./Steps/Contact";
import { Address } from "./Steps/Address";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/address" element={<Address />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
