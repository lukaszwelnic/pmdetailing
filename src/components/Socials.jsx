import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';


export default function Socials() {
    return (
        <div className="flex gap-3.25 items-center text-white text-xl px-1 py-2">
            <a href="https://www.facebook.com/pomarkiewiczdetailing" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-gold-light transition duration-200 scale-80" />
            </a>
            <a href="https://www.instagram.com/pomarkiewicz_detailing/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-gold-light transition duration-200 -ml-0.5" />
            </a>
            <a href="https://www.youtube.com/@pomarkiewiczdetailing3" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-gold-light transition duration-200 ml-1.5 scale-130" />
            </a>
        </div>
    );
}
