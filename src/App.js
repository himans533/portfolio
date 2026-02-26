
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Blog from './components/Blog';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Home />
      <About />
      <Blog />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
