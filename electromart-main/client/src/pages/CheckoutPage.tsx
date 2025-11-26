import { type FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createOrder } from '../lib/api';
import { useCart } from '../store/CartContext';

const defaultForm = {
  fullName: '',
  email: '',
  phone: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  country: '',
  postalCode: '',
  paymentMethod: 'card',
};

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const [formState, setFormState] = useState(defaultForm);
  const [feedback, setFeedback] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      setFeedback('Your concierge order has been scheduled. A specialist will reach out shortly.');
      clearCart();
      setFormState(defaultForm);
    },
    onError: () => setFeedback('Unable to place order. Please try again.'),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!items.length) {
      setFeedback('Your capsule is empty.');
      return;
    }

    mutation.mutate({
      items: items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        selectedColor: item.color,
        selectedStorage: item.storage,
      })),
      customer: {
        fullName: formState.fullName,
        email: formState.email,
        phone: formState.phone,
      },
      shipping: {
        line1: formState.line1,
        line2: formState.line2,
        city: formState.city,
        state: formState.state,
        country: formState.country,
        postalCode: formState.postalCode,
      },
      paymentMethod: formState.paymentMethod as 'card' | 'upi' | 'cod',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-10">
      <section className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-soft-xl">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Concierge checkout</p>
          <h1 className="font-display text-4xl text-midnight">White-glove delivery</h1>
          <p className="text-sm text-slate-500">Provide your details and our concierge will coordinate everything.</p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {['fullName', 'email', 'phone'].map((field) => (
                <label key={field} className="space-y-2 text-sm text-slate-500">
                  <span className="block uppercase tracking-[0.3em] text-xs">{field}</span>
                  <input
                    name={field}
                    value={formState[field as keyof typeof formState]}
                    onChange={handleChange}
                    required={field !== 'line2'}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-midnight"
                  />
                </label>
              ))}
            </div>
            <div className="space-y-4">
              {['line1', 'line2', 'city', 'state', 'country', 'postalCode'].map((field) => (
                <label key={field} className="space-y-2 text-sm text-slate-500">
                  <span className="block uppercase tracking-[0.3em] text-xs">{field}</span>
                  <input
                    name={field}
                    value={formState[field as keyof typeof formState]}
                    onChange={handleChange}
                    required={field !== 'line2'}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-midnight"
                  />
                </label>
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-500">
              <span className="block uppercase tracking-[0.3em] text-xs">Payment</span>
              <select
                name="paymentMethod"
                value={formState.paymentMethod}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-midnight"
              >
                <option value="card">Curated card on file</option>
                <option value="upi">UPI / Instant</option>
                <option value="cod">Pay on arrival</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full rounded-full bg-midnight py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 disabled:cursor-progress"
            >
              {mutation.isPending
                ? 'Scheduling...'
                : `Confirm order • ₹${total.toLocaleString('en-IN')}`}
            </button>
            {feedback && <p className="text-sm text-brand-600">{feedback}</p>}
          </form>

          <div className="space-y-4 rounded-[28px] bg-slate-50 p-6">
            <h2 className="font-semibold text-midnight">Your capsule</h2>
            {items.length === 0 && <p className="text-sm text-slate-500">No items selected yet.</p>}
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white p-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-medium text-midnight">{item.name}</p>
                  <p className="text-xs text-slate-500">
                    {[item.color, item.storage].filter(Boolean).join(' · ') || 'Standard edition'}
                  </p>
                </div>
                <p className="ml-auto text-sm font-semibold text-midnight">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            ))}
            <div className="border-t pt-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-midnight">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;

