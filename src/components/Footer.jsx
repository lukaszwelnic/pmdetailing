import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-800 p-5">
            <div className="container mx-auto text-center text-sm/6 font-semibold text-white">
                <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            </div>
        </footer>
    );
}
