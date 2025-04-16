import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Footer from './components/Footer.jsx';
import routes from './routes.jsx';

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <main className="main">
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
