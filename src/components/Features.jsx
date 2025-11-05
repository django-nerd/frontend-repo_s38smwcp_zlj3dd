import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Truck, Wallet } from 'lucide-react';
import { useRef } from 'react';

function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-200 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function Features() {
  const items = [
    {
      icon: CreditCard,
      title: 'Store Credits',
      desc: 'Earn 10% credits on purchases over $50. Withdraw after a year or use instantly.',
      gradient: 'from-yellow-300/20 to-amber-500/10',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Trading',
      desc: 'Verified sellers and end-to-end buyer protection on every order.',
      gradient: 'from-emerald-300/20 to-teal-400/10',
    },
    {
      icon: Truck,
      title: 'Flexible Delivery',
      desc: 'Pickup, standard, or urgent delivery — choose what fits your schedule.',
      gradient: 'from-sky-300/20 to-indigo-500/10',
    },
    {
      icon: Wallet,
      title: 'Multiple Payments',
      desc: 'Bank transfer, cash, or store credits — pay the way you like.',
      gradient: 'from-violet-300/20 to-fuchsia-400/10',
    },
  ];

  return (
    <section id="start" className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-zinc-50 via-zinc-200 to-yellow-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            A luxury-first marketplace with real rewards
          </h2>
          <p className="mt-3 text-zinc-300">
            Everything you need to shop and sell premium brands with total confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((card, i) => (
            <TiltCard key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className={`pointer-events-none absolute -inset-20 rounded-2xl bg-gradient-to-br ${card.gradient} blur-2xl`} />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <card.icon className="h-6 w-6 text-yellow-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{card.desc}</p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
