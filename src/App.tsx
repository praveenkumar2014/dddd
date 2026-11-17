import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CookieConsent from "./components/CookieConsent";
import ContactSalesModal from "./components/ContactSalesModal";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-zinc-950 antialiased">
      <Header onContactSales={openContact} />
      <main>
        <Hero />
      </main>
      <CookieConsent onContactSales={openContact} />
      <ContactSalesModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
