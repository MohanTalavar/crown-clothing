import "./App.css";
import { Homepage } from "./pages/Homepage-component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shop/Shoppage-component";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
