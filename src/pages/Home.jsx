import home_page_img from "../assets/images/home_page_image.png";

export default function Home() {
    return (
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
    );
}