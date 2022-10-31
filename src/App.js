import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Tracking from "./component/Tracking";
import FavoriteCoinList from "./component/fav";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <BrowserRouter basename="/cryptotracking">
        <Navbar />
        <Routes>
          <Route  exact path="/cryptotracking" element={<Tracking />} />
          <Route path="/fav" element={<FavoriteCoinList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
