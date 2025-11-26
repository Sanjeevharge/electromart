import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useCart } from '../../store/CartContext';

const CartDrawer = () => {
  const { items, total, isOpen, closeCart, removeFromCart, updateQuantity } = useCart();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 flex w-full justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b px-6 py-4">
                <Dialog.Title className="font-display text-xl text-midnight">Your Capsule</Dialog.Title>
                <button onClick={closeCart}>
                  <XMarkIcon className="h-6 w-6 text-slate-500" />
                </button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                {items.length === 0 && (
                  <p className="text-sm text-slate-500">Your collection is patiently waiting.</p>
                )}
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-2xl border border-slate-100 p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-midnight">{item.name}</p>
                          <p className="text-sm text-slate-500 capitalize">
                            {[item.color, item.storage].filter(Boolean).join(' • ') || 'Standard edition'}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-slate-400 hover:text-slate-600"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <select
                          value={item.quantity}
                          onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                          className="rounded-full border border-slate-200 px-3 py-1 text-sm"
                        >
                          {[1, 2, 3, 4, 5].map((value) => (
                            <option key={value} value={value}>
                              Qty {value}
                            </option>
                          ))}
                        </select>
                        <p className="text-sm font-semibold text-midnight">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t px-6 py-6">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-midnight">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="mt-4 block rounded-full bg-midnight py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Proceed to concierge checkout
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartDrawer;

