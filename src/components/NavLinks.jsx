// components/NavLinks.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
    { path: '/', key: 'home' },
    { path: '/offer', key: 'offer' },
    { path: '/achievements', key: 'achievements' },
    { path: '/blog', key: 'blog' },
    { path: '/contact', key: 'contact' },
];

export default function NavLinks({ onClick }) {
    const { t } = useTranslation();

    return (
        <>
            {links.map(({ path, key }) => (
                <Link
                    key={path}
                    to={path}
                    onClick={onClick}
                    className="hover:underline transition-all"
                >
                    {t(`nav.${key}`)}
                </Link>
            ))}
        </>
    );
}
