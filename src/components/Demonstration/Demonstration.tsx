import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Demonstration() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <h2 id='lastProduct' className="font-bold text-5xl mt-44" data-aos="zoom-in" data-aos-duration="1000">Demonstração</h2>
            <p data-aos="zoom-in" data-aos-duration="1000" className="font-semibold text-medium text-lg mt-6 text-center">Veja nossos scripts em ação. Assista à demonstração de <br /> nossos recursos mais recentes</p>
            <iframe data-aos="zoom-in" data-aos-duration="1000" className="w-9/12 rounded-xl mt-16 mb-16 max-sm:h-[400px]" height="833px" src="https://www.youtube.com/embed/26Y92BNfgOw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </>
    )
}