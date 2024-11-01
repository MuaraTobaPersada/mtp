import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>Kami memberikan layanan penagihan secara profesional dan sesuai dengan regulasi yang berlaku. </strong> 
                    Dengan tim berpengalaman yang siap menangani berbagai kasus, dan bekerja memberikan progress yang positif dengan tingkat keberhasilan tinggi dengan efektifitas maksimal.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Team Kami</h2>
                <div className="mt-2">mtp &ldquo;team-work&rdquo;</div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <div className="">member</div>
                    <div className="">member</div>
                    <div className="">member</div>
                    <div className="">member</div>
                    <div className="">member</div>
                    <div className="">member</div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs