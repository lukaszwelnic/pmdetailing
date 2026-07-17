import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeatureCard({ title, icon, description }) {
    const { ref, visible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center text-center bg-white rounded-xl shadow-md overflow-hidden w-full max-w-[350px] min-h-[450px]
                hover:scale-105 hover:shadow-2xl cursor-default
                transition-all duration-500
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h3 className="bg-gold text-white font-bold py-4 tracking-wide text-xl w-full">
                {title}
            </h3>
            <div className="p-4 flex flex-col justify-evenly items-center flex-grow">
                <div className="text-gold text-5xl mb-6 flex justify-center">{icon}</div>
                <div className="h-[3px] rounded-xl bg-gold-light w-2/3 mb-4" />
                <p className="text-lg text-neutral-700 font-medium">{description}</p>
            </div>
        </div>
    );
}
