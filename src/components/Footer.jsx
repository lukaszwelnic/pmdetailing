import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full z-50 bg-neutral-800 p-5">
            <div className="mx-auto max-w-8xl text-center text-xs sm:text-sm font-semibold text-white">
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            </div>
        </footer>
    );
}
