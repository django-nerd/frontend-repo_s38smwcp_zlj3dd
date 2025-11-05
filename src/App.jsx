import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Rewards from './components/Rewards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] font-[Inter] text-white">
      <Hero />
      <Stats />
      <Features />
      <Rewards />
      <Footer />
    </div>
  );
}

export default App;
