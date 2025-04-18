import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/Routes.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}
