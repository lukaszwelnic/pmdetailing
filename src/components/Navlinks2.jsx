import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
    { path: '/', key: 'home' },
    { path: '/offer', key: 'offer' },
    { path: '/achievements', key: 'achievements' },
    { path: '/blog', key: 'blog' },
    { path: '/contact', key: 'contact' },
];

export default function NavLinks({ onClick, variant = 'desktop' }) {
    const { t } = useTranslation();
    const isMobile = variant === 'mobile';

    if (isMobile) {
        return (
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {links.map(({ path, key }) => (
                            <Link
                                key={path}
                                to={path}
                                onClick={onClick}
                                className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                                    key === 'contact'
                                        ? 'bg-gold text-white hover:bg-gold-light'
                                        : 'text-white hover:bg-neutral-500'
                                }`}
                            >
                                {t(`nav.${key}`)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <nav className="hidden lg:flex lg:gap-x-9">
            {links.map(({ path, key }) => (
                <Link
                    key={path}
                    to={path}
                    onClick={onClick}
                    className={`text-sm/6 font-semibold rounded-md px-3 py-2 ${
                        key === 'contact'
                            ? 'bg-gold text-white hover:bg-gold-light'
                            : 'text-white hover:bg-neutral-500 hover:text-white'
                    }`}
                >
                    {t(`nav.${key}`)}
                </Link>
            ))}
        </nav>
    );
}
