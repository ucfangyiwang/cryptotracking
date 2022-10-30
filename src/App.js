import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Tracking from "./component/Tracking";
import FavoriteCoinList from "./component/fav";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tracking />} />
          <Route path="/fav" element={<FavoriteCoinList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
