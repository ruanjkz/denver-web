import { useEffect } from "react"
import computer from "../../assets/computer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';


export function HeroSection() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <div data-aos="fade-up" data-aos-duration="1000" className="w-1480 h-674 mt-2 flex items-center justify-between gap-x-20 w-9/12">
                <div className="flex flex-col gap-y-5">
                    <div className="font-bold text-7xl">
                    <Typewriter onInit={(typewriter) => {typewriter.typeString('Encontre os melhores <br /> códigos aqui!').callFunction(() => {console.log('String typed out!')}).pauseFor(1500).start()}}/>
                    </div>
                    <p className="ml-2 font-medium text-lg mt-6">Que tal trabalhar com um profissional da área? <br /> Conosco a sua ideia torna-se realidade!</p>
                    <div className="ml-2 flex gap-x-6 mt-6">
                        <a className="min-w-32 h-12 max-sm:w-52 px-6 border-2 border-solid border-purple-primary bg-purple-primary font-medium rounded-lg text-white hover:bg-purple-primary-dark hover:border-purple-primary-dark hover:text-white transition duration-300 ease-in-out flex items-center justify-center" href="https://discord.gg/pAhAzYrKnD" target="_blank">Fazer Orçamento</a>      
                        <button className="border-2 border-solid border-black rounded-lg px-4 font-medium hover:bg-black hover:text-white transition duration-300 ease-in-out max-sm:text-sm">Contate-nos</button>
                    </div>
                </div>
                <img draggable="false" className="mb-32" src={computer}/>
            </div>
        </>
    )
}