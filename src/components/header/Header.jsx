import { Menu } from 'lucide-react';
import Logo from './components/Logo.jsx';
import NavLinks from './components/NavLinks.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

export default function Header() {
    return (
        <header className="header">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="md:flex md:items-center md:gap-12">
                        <Logo />
                    </div>

                    <div className="hidden md:block">
                        <NavLinks />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-2">
                            <LanguageSwitcher />
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-neutral-800 dark:text-white dark:hover:text-white/75"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
