import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/cart/CartDrawer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import BuyAgainPage from "./pages/BuyAgainPage";
import AccessoriesPage from "./pages/AccessoriesPage";
import ShowroomPage from "./pages/ShowroomPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import AppliancesPage from "./pages/AppliancesPage";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-midnight">
      <Navbar />
      <CartDrawer />
      <main className="mx-auto max-w-7xl space-y-16 px-6 pt-28 pb-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/buy-again" element={<BuyAgainPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/appliances" element={<AppliancesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
