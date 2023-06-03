import './App.css';
import NavBar from './components/Navbar';
import BuyToken from './pages/BuyToken';
import Exchange from './pages/Exchange';
import FAQ from './pages/FAQ';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import RoadMap from './pages/RoadMap';
import Team from './pages/Team';
import TokenOmic from './pages/TokenOmic';
import WatchVideo from './pages/WatchVideo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <BuyToken />
      <Exchange />
      <WatchVideo />
      <TokenOmic />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
