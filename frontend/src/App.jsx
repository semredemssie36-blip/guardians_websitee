import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import HealthPackages from './pages/HealthPackages';
import Corporate from './pages/Corporate';
import Doctors from './pages/Doctors';
import PatientInfo from './pages/PatientInfo';
import Results from './pages/Results';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import HomeCollection from './pages/HomeCollection';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './App.css';
import './styles/themes.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen theme-bg-background overflow-x-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<HealthPackages />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/patient-info" element={<PatientInfo />} />
              <Route path="/results" element={<Results />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/home-collection" element={<HomeCollection />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;