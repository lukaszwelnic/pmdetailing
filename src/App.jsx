import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Home from './pages/Home.jsx';
import Offer from './pages/Offer.jsx';
import Achievements from './pages/Achievements.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/offer" element={<Offer />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
