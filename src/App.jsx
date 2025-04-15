import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Offer from './pages/Offer.jsx';
import Achievements from './pages/Achievements.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <nav className="p-4 bg-gray-200 flex gap-4">
                <Link to="/">Strona główna</Link>
                <Link to="/offer">Oferta</Link>
                <Link to="/achievements">Osiągnięcia</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Kontakt</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App