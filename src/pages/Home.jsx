import home_page_img from "../assets/images/home_page_image.png";

export default function Home() {
    return (
        <section className="relative">
            <img
                src={home_page_img}
                alt="Hero"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center p-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">AUTO DETAILING</h1>
                </div>
            </div>
        </section>
    );
}