import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import NavLinks from './NavLinks.jsx';
import Socials from './Socials.jsx';
import Flags from './Flags.jsx';

import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="fixed text-white w-full z-50 bg-neutral-800">
            <nav className="mx-auto flex max-w-8xl items-center justify-between p-4">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-ml-1 p-0.5">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto mt-1.5 p-1"
                        />
                    </Link>
                </div>
                <NavLinks/>
                <div className="hidden lg:flex lg:flex-1 items-center">
                    <div className="flex flex-1 justify-center">
                        <Socials />
                    </div>
                    <div className="pr-4">
                        <Flags />
                    </div>
                </div>
                <div className="fixed lg:hidden right-3">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="inline-flex items-center justify-center rounded-md p-3"
                    >
                        {/* Hamburger Icon */}
                        <Bars3Icon
                            className={`size-6 text-white absolute transition-transform duration-200 ease-in-out ${mobileMenuOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                        />
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <DialogPanel className="fixed inset-y-0 right-0 w-full z-50 overflow-y-auto bg-neutral-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="fixed lg:hidden right-3">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-3"
                        >
                            {/* X Icon */}
                            <XMarkIcon
                                className={`size-6 text-white absolute transition-transform duration-200 ease-in-out ${mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                            />
                        </button>
                    </div>
                    <NavLinks variant="mobile" onClick={() => setMobileMenuOpen(false)} />
                </DialogPanel>
            </Dialog>
        </header>
);
}
