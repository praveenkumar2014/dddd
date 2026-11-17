import { useEffect, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/CookieConsent";
import ContactSalesModal from "./components/ContactSalesModal";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./lib/site";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MarketingLayout() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBFB] font-sans text-zinc-950 antialiased">
      <ScrollToTop />
      <Header onContactSales={openContact} />
      <main className="flex-1 overflow-x-clip">
        <Outlet />
      </main>
      <Footer onContactSales={openContact} />
      <CookieConsent onContactSales={openContact} />
      <ContactSalesModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default function App() {
  const placeholderPaths = ROUTES.filter(
    (route) => !["/login", "/signup"].includes(route.path),
  );

  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />
        {placeholderPaths.map((route) => (
          <Route key={route.path} path={route.path} element={<Placeholder />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
