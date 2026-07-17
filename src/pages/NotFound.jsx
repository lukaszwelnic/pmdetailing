import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] pt-20 px-4 text-center">
            <h1 className="text-[10rem] font-black leading-none text-gold select-none">404</h1>
            <p className="text-2xl font-bold text-neutral-800 mt-2 mb-2">{t('notFound.title')}</p>
            <p className="text-neutral-500 mb-8">{t('notFound.message')}</p>
            <Link
                to="/"
                className="bg-gold hover:bg-gold-light text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
            >
                {t('notFound.back')}
            </Link>
        </div>
    );
}
