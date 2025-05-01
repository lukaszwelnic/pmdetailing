import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './routes/Routes.jsx';

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Header />
            <main className="flex-grow pt-18">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}
