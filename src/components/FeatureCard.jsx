import { IoIosArrowDown } from "react-icons/io";

export default function FeatureCard({ title, icon, description }) {
    return (
        <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md overflow-hidden w-[350px] min-h-[450px]">
            <h3 className="bg-gold text-white font-bold py-4 tracking-wide text-xl w-full">
                {title}
            </h3>
            <div className="p-4 flex flex-col justify-evenly items-center flex-grow">
                <div className="text-neutral-800 text-5xl mb-6 flex justify-center">{icon}</div>
                <div className="h-[3px] rounded-xl bg-gold-light w-2/3 mb-4" />
                <p className="text-xl text-neutral-800 uppercase font-bold">{description}</p>
            </div>
        </div>
    );
}
