import FeatureCard from "../components/FeatureCard";
import { FaThumbsUp, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

import home_page_img from "../assets/images/home_page_image.png";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative">
                <img
                    src={home_page_img}
                    alt="Hero"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                        <h1 className="text-[clamp(1rem,6vw,6rem)] font-bold text-white">AUTO DETAILING</h1>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-neutral-800 text-white px-4 py-16">
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        title="ZADOWOLENIE"
                        icon={<FaThumbsUp />}
                        description="Wierzymy, że fundamentem naszej firmy jest zadowolenie klienta"
                    />
                    <FeatureCard
                        title="BEZPIECZEŃSTWO"
                        icon={<FaShieldAlt />}
                        description="Dzięki wieloletniemu doświadczeniu, na każdą usługę dajemy gwarancję satysfakcji"
                    />
                    <FeatureCard
                        title="KOMFORT"
                        icon={<FaHandsHelping />}
                        description="Wychodząc z pomocną ręką oferujemy usługi z dojazdem do klienta"
                    />
                </div>
            </section>
        </>
    );
}
