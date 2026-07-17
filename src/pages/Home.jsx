import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaShieldAlt, FaHandsHelping, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import FeatureCard from '../components/FeatureCard';
import home_page_img from '../assets/images/hero.webp';
import car1 from '../assets/gallery/car1.webp';
import car2 from '../assets/gallery/car2.webp';
import car3 from '../assets/gallery/car3.webp';
import car4 from '../assets/gallery/car4.webp';
import car5 from '../assets/gallery/car5.webp';
import car6 from '../assets/gallery/car6.webp';
import car7 from '../assets/gallery/car7.webp';
import car8 from '../assets/gallery/car8.webp';

const galleryImages = [car1, car2, car3, car4, car5, car6, car7, car8];

function GalleryCarousel({ images, onOpen }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const getSlideWidth = () => {
        if (!containerRef.current) return 0;
        return containerRef.current.scrollWidth / images.length;
    };

    const handleScroll = () => {
        const slideWidth = getSlideWidth();
        if (!slideWidth) return;
        setActiveIndex(Math.round(containerRef.current.scrollLeft / slideWidth));
    };

    const goTo = (index) => {
        const slideWidth = getSlideWidth();
        containerRef.current?.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
    };

    const prev = () => goTo(Math.max(0, activeIndex - 1));
    const next = () => goTo(Math.min(images.length - 1, activeIndex + 1));

    return (
        <div className="relative">
            {/* Scroll container */}
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="flex-none w-full sm:w-1/2 lg:w-1/3 snap-start aspect-[4/3] cursor-pointer overflow-hidden group"
                        onClick={() => onOpen(index)}
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                        />
                    </div>
                ))}
            </div>

            {/* Prev arrow */}
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-gold transition-all duration-200 hover:scale-110"
            >
                <IoIosArrowBack className="text-lg" />
            </button>

            {/* Next arrow */}
            <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-gold transition-all duration-200 hover:scale-110"
            >
                <IoIosArrowForward className="text-lg" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            i === activeIndex ? 'bg-gold w-5 h-2' : 'bg-white/40 w-2 h-2 hover:bg-white/70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const { t } = useTranslation();
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
    const nextImage = () => setLightboxIndex((i) => (i + 1) % galleryImages.length);

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
            else if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % galleryImages.length);
            else if (e.key === 'Escape') setLightboxIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px]">
                <img
                    src={home_page_img}
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl animate-bounce">
                    <IoIosArrowDown />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-dark-section text-white pt-16 pb-0 px-6">
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
                <div className="flex pt-8 justify-center text-3xl text-white animate-bounce">
                    <IoIosArrowDown />
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-dark-section pt-8 pb-16">
                <h2 className="text-center text-white font-bold text-4xl tracking-widest mb-10 px-6">
                    {t('home.gallery.title')}
                </h2>
                <GalleryCarousel images={galleryImages} onOpen={openLightbox} />
                <div className="flex pt-10 justify-center text-3xl text-white animate-bounce">
                    <IoIosArrowDown />
                </div>
            </section>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-5 right-5 text-white text-3xl hover:text-gold transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                    <button
                        className="absolute left-4 text-white text-4xl hover:text-gold transition-colors px-4 py-8"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <img
                        src={galleryImages[lightboxIndex]}
                        alt={`Gallery ${lightboxIndex + 1}`}
                        className="max-h-[85vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="absolute right-4 text-white text-4xl hover:text-gold transition-colors px-4 py-8"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        aria-label="Next"
                    >
                        ›
                    </button>
                    <div className="absolute bottom-6 flex gap-2">
                        {galleryImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                                className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-gold' : 'bg-white/40'}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
