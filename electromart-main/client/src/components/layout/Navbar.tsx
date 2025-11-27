import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../../store/CartContext";

const links = [
  { label: "Home", to: "/" },
  { label: "Appliances", to: "/appliances" },
  { label: "Showroom", to: "/showroom" },
  { label: "Experiences", to: "/experiences" },
  { label: "Buy Again", to: "/buy-again" },
  { label: "Accessories", to: "/accessories" },
];

const Navbar = () => {
  const { items, openCart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-xl border-b border-white/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          className="font-display text-2xl tracking-wide text-midnight"
        >
          electromart<span className="text-brand-500">.</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-slate-900 ${isActive ? "text-midnight" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="hidden items-center rounded-full border border-slate-200 px-3 py-1.5 md:flex"
          >
            <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
            <input
              className="w-32 bg-transparent px-2 text-sm outline-none placeholder:text-slate-400"
              placeholder="Search studio editions"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>

          <button
            type="button"
            onClick={openCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-midnight text-white shadow-soft-xl transition hover:-translate-y-0.5"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-500 px-1 text-xs font-semibold text-white">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
