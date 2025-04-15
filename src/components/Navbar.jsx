import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="bg-gray-200 p-4 flex justify-between">
            <div className="flex gap-4">
                <Link to="/">{t('nav.home')}</Link>
                <Link to="/galeria">{t('nav.gallery')}</Link>
                <Link to="/kontakt">{t('nav.contact')}</Link>
            </div>
            <div>
                <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
                <button onClick={() => i18n.changeLanguage('en')} className="ml-2">EN</button>
            </div>
        </nav>
    );
}
