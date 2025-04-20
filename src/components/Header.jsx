import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import NavLinks from './NavLinks.jsx';
import Socials from './Socials.jsx';
import Flags from './Flags.jsx';

import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className={`text-white fixed w-full z-50 ${isHome ? 'bg-neutral-800/85 backdrop-blur-xs' : 'bg-neutral-800'}`}>
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
                    <div className="ml-auto">
                        <Flags />
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 transition scale-110 focus:outline-none"
                    >
                        <Bars3Icon className={`size-6 text-white transition-transform duration-300 ${mobileMenuOpen ? 'scale-0' : 'scale-100'}`} />
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 transition hover:scale-110 focus:outline-none"
                        >
                            <XMarkIcon
                                aria-hidden="true"
                                className={`size-6 text-white ${ mobileMenuOpen ? 'scale-110' : 'scale-100' }`}
                            />
                        </button>
                    </div>
                    <NavLinks variant="mobile" onClick={() => setMobileMenuOpen(false)} />
                </DialogPanel>
            </Dialog>
        </header>
);
}
