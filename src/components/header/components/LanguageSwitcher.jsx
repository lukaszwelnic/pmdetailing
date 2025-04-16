import { useTranslation } from 'react-i18next';

import plFlag from '../../../assets/flags/pl.svg';
import enFlag from '../../../assets/flags/us.svg';
import deFlag from '../../../assets/flags/de.svg';

const languages = [
    { code: 'pl', flag: plFlag, alt: 'PL', label: 'Polski' },
    { code: 'en', flag: enFlag, alt: 'EN', label: 'English' },
    { code: 'de', flag: deFlag, alt: 'DE', label: 'Deutsch' },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div className="flags-container">
            {languages.map(({ code, flag, alt, label }) => (
                <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    title={label}
                    className={`flag-button ${currentLanguage === code ? 'border-blue-500' : 'border-transparent'}`}
                >
                    <img
                        src={flag}
                        alt={alt}
                        className="language-img"
                        style={{ opacity: currentLanguage === code ? 1 : 0.75 }}
                    />
                </button>
            ))}
        </div>
    );
}
