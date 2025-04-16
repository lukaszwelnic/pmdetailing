import logo from '../../../assets/logo.png';

export default function Logo() {
    return (
        <div className="h-16 flex items-center">
            <img
                src={logo}
                alt="Logo"
                className="logo"
            />
        </div>
    );
}
