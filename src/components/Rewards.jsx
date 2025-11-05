import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';

export default function Rewards() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-300/20 to-violet-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-amber-200/20 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="bg-gradient-to-br from-zinc-50 via-zinc-200 to-yellow-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Earn Store Credits on Every Purchase
              </h3>
              <p className="mt-3 text-zinc-300">
                Spend $50 or more and get 10% back in store credits. Use them instantly or withdraw as cash after a year.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#learn"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/15"
                >
                  <Info className="h-4 w-4" />
                  Learn More About Credits
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#video"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-yellow-200 px-5 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)]"
                >
                  <Play className="h-4 w-4" />
                  Watch Video & Earn Credits
                </motion.a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(600px 200px at 0% 50%, rgba(250,204,21,0.15), transparent 60%), radial-gradient(600px 200px at 100% 50%, rgba(147,51,234,0.12), transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-zinc-200 backdrop-blur">
                    Demo visual — cinematic ambient glow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
