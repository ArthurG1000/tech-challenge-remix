import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWithNavbar from "./components/LayoutWithNavbar";
import RoyalFamily from "./components/RoyalFamily";
import RoyalAssets from "./components/RoyalAssets";
import Contact from "./components/Contact";

import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="" element={<LayoutWithNavbar />}>
            <Route path="" element={<Homepage/>}/>
            <Route path="/royal-family" element={<RoyalFamily/>}/>
            <Route path="/royal-assets" element={<RoyalAssets/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
