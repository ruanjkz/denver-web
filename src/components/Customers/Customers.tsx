import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export function Customers() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <div className="flex flex-col items-center justify-center mt-40" data-aos="flip-left" data-aos-duration="1000">
                <h2 className="font-bold text-5xl">Nossos clientes</h2>
                <p className="font-semibold text-medium text-lg mt-6 text-center">Conheça a satisfação dos nossos clientes e saiba por que somos a escolha número um!</p>
            </div>
        </>
    )
}