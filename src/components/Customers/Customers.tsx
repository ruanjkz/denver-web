import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Customers() {
    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <>
            <div id='customers' className='bg-gray-customer-background px-4 py-12 flex flex-col items-center justify-center mt-16 w-screen'>
                <div className="flex flex-col items-center justify-center mt-20" data-aos="flip-left" data-aos-duration="1000">
                    <h2 className="font-bold text-5xl">Nossos clientes</h2>
                    <p className="font-semibold text-medium text-lg mt-6 text-center">Conheça a satisfação dos nossos clientes e saiba por que <br /> somos a escolha número um!</p>
                </div>
                <div className='flex flex-wrap mt-12 mb-12 gap-x-4 gap-y-4 items-center justify-center w-[1497px]'>
                    <div data-aos="flip-left" data-aos-duration="2000" className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>NEXUS ROLEPLAY</p>
                            <small className='font-medium'>189.879 membros</small>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://images-ext-1.discordapp.net/external/Y8JHvgcOXQeFCONpzC5fqhYXmtrr3jUf-cEZb7bq2Rk/https/i.imgur.com/7OpJDlr.gif"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>RJ ACADEMY</p>
                            <small className='font-medium'>58.002 membros</small>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://images-ext-2.discordapp.net/external/HdsKUigxZuGDJ6T_w6K1ylI4DzaGtLXbKLax9YQSIfA/https/imgur.com/QLzgRoR.gif"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>RACE ULTIMATE</p>
                            <small className='font-medium'>138.500 membros</small>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/wyq9ey/-1109026505.png"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>INFINITY ROLEPLAY</p>
                            <small className='font-medium'>113.977 membros</small>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000" className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://images-ext-2.discordapp.net/external/KJsDxIG1xj3jT31Q72UsqjydS7J7ng4HmhfFBWlFuG4/https/imgur.com/GE5nJxj.gif"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>FIRE EVOLUTION</p>
                            <small className='font-medium'>43.500 membros</small>
                        </div>
                    </div>
                    <div data-aos="flip-left" data-aos-duration="2000"  className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                        <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/wxd9jg/1898114881.png"/>
                        <div className='flex flex-col text-left'>
                            <p className='font-bold'>KUSH NETWORK</p>
                            <small className='font-medium'>40.381 membros</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}