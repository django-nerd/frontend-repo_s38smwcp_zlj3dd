import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Store, Sparkles, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0f] text-white">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.2),transparent_60%)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glass overlay to add depth while allowing interactions with the scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Top navigation with floating balance */}
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-zinc-100/20 to-zinc-100/5 backdrop-blur">
            <Sparkles className="h-5 w-5 text-yellow-300" />
          </div>
          <span className="text-lg font-semibold tracking-wide">The Premium Brand Marketplace</span>
        </div>
        {/* Floating store credit balance */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-lg"
        >
          <DollarSign className="h-4 w-4 text-emerald-300" />
          <span className="text-sm text-zinc-100">Credits</span>
          <span className="text-sm font-semibold text-white">$128.90</span>
          <span className="pointer-events-none absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-emerald-400/20 via-transparent to-yellow-300/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      </nav>

      {/* Hero copy + CTAs */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-10 pb-24 md:grid-cols-2 md:pt-16 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Store className="h-4 w-4 text-yellow-300" />
            <span className="text-zinc-200">Verified sellers • Global reach • Buyer protection</span>
          </div>

          <h1 className="text-balance bg-gradient-to-br from-zinc-50 via-zinc-200 to-yellow-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            The Premium Brand Marketplace
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-200/90">
            Buy, sell, and discover premium brands with our innovative store credit system. Earn rewards, get exclusive offers, and connect with verified sellers worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-100 to-yellow-200 px-6 py-3 font-semibold text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)] transition-shadow hover:shadow-[0_20px_60px_rgba(234,179,8,0.45)]"
            >
              Start Shopping
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#sell"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Sell Your Products
            </motion.a>
          </div>
        </motion.div>

        {/* Right side accent card for depth (glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="relative hidden h-[520px] w-full md:block"
        >
          <div className="pointer-events-none absolute -inset-10 rounded-3xl bg-gradient-to-br from-yellow-300/10 via-violet-500/10 to-sky-400/10 blur-2xl" />
          <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0" />
            <div className="relative h-full rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="h-full w-full rounded-xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
