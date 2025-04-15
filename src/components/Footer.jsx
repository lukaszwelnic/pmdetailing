import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Pomarkiewicz Detailing. {t('footer.rights', { defaultValue: 'Wszelkie prawa zastrzeżone.' })}</p>
            </div>
        </footer>
    );
}
