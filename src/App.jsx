import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "animate.css"; // Import animate.css
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import PrinterOffline from "./pages/setupPages/PrinterOffline";
import PrinterSetup from "./pages/setupPages/PrinterSetup";
import ScannerSetup from "./pages/setupPages/ScannerSetup";
import PrivacyPolicy from "./pages/setupPages/PrivacyPolicy";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/printeroffline" element={<PrinterOffline />} />
          <Route path="/printersetup" element={<PrinterSetup />} />
          <Route path="/scannersetup" element={<ScannerSetup />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
