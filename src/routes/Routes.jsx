import { Routes, Route, Navigate } from 'react-router-dom';
import Loadable from '../components/Loadable';

import Home from '../pages/Home.jsx';
import Offer from '../pages/Offer.jsx';
import Achievements from '../pages/Achievements.jsx';
import Blog from '../pages/Blog.jsx';
import Contact from '../pages/Contact.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Loadable><Home /></Loadable>} />
            <Route path="/offer" element={<Loadable><Offer /></Loadable>} />
            <Route path="/achievements" element={<Loadable><Achievements /></Loadable>} />
            <Route path="/blog" element={<Loadable><Blog /></Loadable>} />
            <Route path="/contact" element={<Loadable><Contact /></Loadable>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
