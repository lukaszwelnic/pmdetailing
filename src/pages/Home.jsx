import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import FeatureCard from '../components/FeatureCard';
import home_page_img from '../assets/images/home_page_image.webp';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px]">
                <img
                    src={home_page_img}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center gap-5">
                    <h1 className="text-[clamp(2.5rem,7vw,7rem)] font-black text-white tracking-widest uppercase">
                        AUTO DETAILING
                    </h1>
                    <div className="h-[3px] w-20 rounded-full bg-gold" />
                    <p className="text-white/80 text-lg max-w-md">
                        {t('home.hero.subtitle')}
                    </p>
                    <Link
                        to="/contact"
                        className="mt-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200"
                    >
                        {t('home.hero.cta')}
                    </Link>
                </div>

                {/* Bounce arrow */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl animate-bounce">
                    <IoIosArrowDown />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-neutral-800 text-white py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
                    <FeatureCard
                        title={t('home.features.satisfaction.title')}
                        icon={<FaThumbsUp />}
                        description={t('home.features.satisfaction.description')}
                    />
                    <FeatureCard
                        title={t('home.features.safety.title')}
                        icon={<FaShieldAlt />}
                        description={t('home.features.safety.description')}
                    />
                    <FeatureCard
                        title={t('home.features.comfort.title')}
                        icon={<FaHandsHelping />}
                        description={t('home.features.comfort.description')}
                    />
                </div>
            </section>
        </>
    );
}
