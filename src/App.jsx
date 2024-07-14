import "./App.css";
import { Homepage } from "./pages/Homepage-component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopPage } from "./pages/shop/Shoppage-component";
import { Header } from "./components/header/header-component";
import { SignInAndSignUp } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
