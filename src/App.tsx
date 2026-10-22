import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-white">
        <ScrollToTop />
        
        {/* Editorial Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Studio Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
