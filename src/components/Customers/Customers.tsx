import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export function Customers() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <div id='customers' className='bg-gray-customer-background px-4 py-12 items-center justify-center mt-24'>
            <div className="flex flex-col items-center justify-center mt-40" data-aos="flip-left" data-aos-duration="1000">
                <h2 className="font-bold text-5xl">Nossos clientes</h2>
                <p className="font-semibold text-medium text-lg mt-6 text-center">Conheça a satisfação dos nossos clientes e saiba por que <br /> somos a escolha número um!</p>
            </div>
            <div className='flex flex-wrap mt-12 mb-12 gap-x-4 gap-y-4 items-center justify-center'>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
                <div className='w-480 h-20 bg-gray-customer flex gap-x-4 px-6 items-center rounded-lg'>
                    <img className='w-12 h-12 rounded-full' src="https://servers-live.fivem.net/servers/icon/x43r9m/376926146.png"/>
                    <div className='flex flex-col text-left'>
                        <p className='font-bold'>NEXUS ROLEPLAY</p>
                        <small className='font-medium'>138.500 membros</small>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}