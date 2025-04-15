// components/MobileMenu.jsx
import NavLinks from './NavLinks';

export default function MobileMenu({ isOpen, setIsOpen }) {
    if (!isOpen) return null;

    return (
        <div className="md:hidden mt-4 flex flex-col gap-2 animate-fade-in bg-gray-800 text-white p-4">
            <NavLinks onClick={() => setIsOpen(false)} />
        </div>
    );
}
