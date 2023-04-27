import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Containers/Header";
import ProductListing from "./Containers/ProductListing";
import ProductDetails from "./Containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
