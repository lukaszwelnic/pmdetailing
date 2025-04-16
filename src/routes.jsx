import Loadable from './components/Loadable.jsx';

import Home from './pages/Home.jsx';
import Offer from './pages/Offer.jsx';
import Achievements from './pages/Achievements.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';

const routes = [
    { path: '/', element: <Loadable><Home /></Loadable> },
    { path: '/offer', element: <Loadable><Offer /></Loadable> },
    { path: '/achievements', element: <Loadable><Achievements /></Loadable> },
    { path: '/blog', element: <Loadable><Blog /></Loadable> },
    { path: '/contact', element: <Loadable><Contact /></Loadable> },
];

export default routes;
