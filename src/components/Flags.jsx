import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

import plFlag from '../assets/flags/pl.svg';
import enFlag from '../assets/flags/en.svg';
import deFlag from '../assets/flags/de.svg';

const languages = [
    { code: 'pl', flag: plFlag, alt: 'PL', label: 'Polski' },
    { code: 'en', flag: enFlag, alt: 'EN', label: 'English' },
    { code: 'de', flag: deFlag, alt: 'DE', label: 'Deutsch' },
];

export default function Flags({ variant = 'desktop' }) {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    if (variant === 'mobile') {
        return (
            <div className="flex gap-3">
                {languages.map(({ code, flag, alt, label }) => (
                    <button
                        key={code}
                        onClick={() => i18n.changeLanguage(code)}
                        className={`h-6 w-6 rounded-full overflow-hidden border-2 transition-transform duration-200 hover:scale-110 ${
                            currentLanguage === code ? 'outline-1 outline-white outline-offset-1' : 'border-transparent'
                        }`}
                        title={label}
                    >
                        <img src={flag} alt={alt} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        );
    }

    const current = languages.find(l => l.code === currentLanguage);
    const otherLanguages = languages.filter(lang => lang.code !== currentLanguage);

    return (
        <Menu as="div" className="relative">
            <MenuButton className="relative flex rounded-full object-cover hover:outline-2 hover:outline-white hover:outline-offset-2">
                <img
                    src={current.flag}
                    alt={current.alt}
                    className="size-6 rounded-full"
                />
            </MenuButton>
            <MenuItems transition className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-neutral-800 py-1
                                             shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95
                                             data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out
                                             data-leave:duration-75 data-leave:ease-in">
                {otherLanguages.map(({ code, flag, label, alt }) => (
                    <MenuItem key={code}>
                        <button
                            onClick={() => i18n.changeLanguage(code)}
                            className="flex w-full px-4 py-2 text-sm text-white data-focus:bg-neutral-500 data-focus:outline-hidden"
                        >
                            <img src={flag} alt={alt} className="w-5 h-5 rounded-full mr-2" />
                            {label}
                        </button>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    );
}
