import { useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/Routes.jsx';

export default function App() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className={`flex-grow ${!isHome ? 'pt-18' : ''}`}>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}
