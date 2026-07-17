import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from '../components/Loadable';

const Home = lazy(() => import('../pages/Home.jsx'));
const Offer = lazy(() => import('../pages/Offer.jsx'));
const Achievements = lazy(() => import('../pages/Achievements.jsx'));
const Blog = lazy(() => import('../pages/Blog.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Loadable><Home /></Loadable>} />
            <Route path="/offer" element={<Loadable><Offer /></Loadable>} />
            <Route path="/achievements" element={<Loadable><Achievements /></Loadable>} />
            <Route path="/blog" element={<Loadable><Blog /></Loadable>} />
            <Route path="/contact" element={<Loadable><Contact /></Loadable>} />
            <Route path="*" element={<Loadable><NotFound /></Loadable>} />
        </Routes>
    );
}
