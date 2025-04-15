// components/Navbar.jsx
import { useState } from 'react';
import { Menu } from 'lucide-react';
import NavLinks from './NavLinks';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

import logo from '../assets/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 bg-opacity-70 backdrop-blur-sm h-16 px-4 shadow-md sticky top-0 z-50 text-white">
            <div className="h-full flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-full w-auto" />

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    <NavLinks />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <LanguageSwitcher />

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1 border rounded border-gray-500 text-white hover:scale-105 transition"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    );
}