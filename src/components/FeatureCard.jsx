export default function FeatureCard({ title, icon, description }) {
    return (
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md overflow-hidden">
            <h3 className="bg-gold text-white font-bold py-2 tracking-wide text-lg w-full mb-4">
                {title}
            </h3>
            <div className="p-6 space-y-4">
                <div className="text-neutral-800 text-4xl mb-8">{icon}</div>
                <div className="h-[3px] rounded-xl bg-gold w-1/2 mx-auto mb-4"></div>
                <p className="text-sm text-neutral-800 uppercase font-bold">{description}</p>
            </div>
        </div>
    );
}
