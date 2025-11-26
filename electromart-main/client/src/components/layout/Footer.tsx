import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Boutiques',
    items: ['Singapore', 'Dubai', 'Paris', 'New York'],
  },
  {
    title: 'Services',
    items: ['Bespoke concierge', 'VIP upgrades', 'Aftercare', 'Corporate'],
  },
  {
    title: 'Company',
    items: ['About', 'Careers', 'Press', 'Contact'],
  },
];

const Footer = () => (
  <footer className="border-t border-white/30 bg-midnight text-slate-200">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
      <div>
        <Link to="/" className="font-display text-2xl text-white">
          electromart<span className="text-brand-400">.</span>
        </Link>
        <p className="mt-4 text-sm text-slate-400">
          Curated technology, artful retail. Delivered with concierge precision.
        </p>
      </div>
      {footerLinks.map((column) => (
        <div key={column.title}>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">{column.title}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {column.items.map((item) => (
              <li key={item} className="text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Electromart Private Collection
    </div>
  </footer>
);

export default Footer;

