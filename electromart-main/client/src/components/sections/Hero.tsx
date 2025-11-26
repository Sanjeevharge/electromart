import { Link } from 'react-router-dom';

const stats = [
  { label: 'Pan-India serviceable pincodes', value: '29K+' },
  { label: 'Top Indian cities served', value: '80+' },
  { label: 'Same-day premium deliveries', value: '24h' },
];

const Hero = () => (
  <section className="relative overflow-hidden rounded-[40px] border border-white/50 bg-gradient-to-br from-white via-slate-50 to-brand-50 p-10 shadow-soft-xl">
    <div className="absolute inset-y-0 right-0 hidden h-full w-1/2 animate-aurora bg-[radial-gradient(circle_at_top,_rgba(86,102,255,0.25),_transparent)] md:block" />
    <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Electromart India · Flagship Edit</p>
        <h1 className="font-display text-4xl leading-tight text-midnight md:text-5xl">
          India&apos;s favourite electronics, curated like a luxury boutique.
        </h1>
        <p className="text-lg text-slate-600 md:w-3/4">
          Discover trusted Indian and global brands across smartphones, laptops, TVs and home appliances — with pricing
          in INR, genuine GST invoices and concierge-style support.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="rounded-full bg-midnight px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Enter the showroom
          </Link>
          <Link
            to="/checkout"
            className="rounded-full border border-midnight/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-midnight"
          >
            Book concierge
          </Link>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Flagship of the week</p>
          <h3 className="mt-3 font-display text-3xl text-midnight">iPhone 15 Pro · Galaxy S24 Ultra</h3>
          <p className="mt-2 text-slate-500">
            Exchange your old phone, get instant bank offers and receive sealed Indian stock with full brand warranty.
          </p>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200"
            alt="Astra One Pro"
            className="mt-6 h-64 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-midnight">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

