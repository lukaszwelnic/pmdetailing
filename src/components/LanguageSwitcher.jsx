import { useTranslation } from 'react-i18next';
import plFlag from '../assets/flags/pl.svg';
import enFlag from '../assets/flags/us.svg';
import deFlag from '../assets/flags/de.svg';

const languages = [
    { code: 'pl', flag: plFlag, alt: 'PL', label: 'Polski' },
    { code: 'en', flag: enFlag, alt: 'EN', label: 'English' },
    { code: 'de', flag: deFlag, alt: 'DE', label: 'Deutsch' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div className="flex gap-2">
            {languages.map(({ code, flag, alt, label }) => (
                <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    title={label}
                    className={`w-8 h-6 overflow-hidden rounded-md border-2 transition-all duration-300
          transform hover:scale-110 focus:outline-none
          ${currentLanguage === code ? 'border-blue-500' : 'border-transparent'}`}
                >
                    <img
                        src={flag}
                        alt={alt}
                        className="w-full h-full object-cover"
                        style={{ opacity: currentLanguage === code ? 1 : 0.6 }}
                    />
                </button>
            ))}
        </div>
    );
}
