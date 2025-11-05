import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, ShoppingBag, Smile } from 'lucide-react';
import { useEffect } from 'react';

function Counter({ from = 0, to = 0, suffix = '' }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, to]);

  return (
    <motion.span className="text-3xl font-semibold text-white md:text-4xl">
      {rounded}
      {suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-14 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {[
          { icon: Users, label: 'Active Users', value: 50, suffix: 'K+' },
          { icon: ShoppingBag, label: 'Products Sold', value: 1, suffix: 'M+' },
          { icon: Smile, label: 'Satisfaction', value: 99, suffix: '.9%' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 * idx, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="mb-3 flex items-center gap-3">
              <stat.icon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm tracking-wide text-zinc-300">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <Counter to={stat.value} suffix={stat.suffix} />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-yellow-300/20 to-violet-400/20 blur-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
