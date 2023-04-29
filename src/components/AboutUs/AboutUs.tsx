import { useEffect } from 'react'
import protect from "../../assets/protect.svg"
import support from "../../assets/support.svg"
import optimize from "../../assets/optimize.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AboutUs () {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
            <div className="flex flex-col items-center justify-center mt-32" data-aos="zoom-in" data-aos-duration="1000">
                <h2 className="font-bold text-5xl">Sobre nós</h2>
                <p className="font-semibold text-medium text-lg mt-6 text-center">Aqui está algumas coisas sobre a nossa empresa, caso tenha <br /> dúvida contate o suporte.</p>
            </div>
            <div className="flex gap-x-10 mt-24">
                    <div data-aos="zoom-in" data-aos-duration="2000" className="w-480 h-465 bg-gray-box border-2 border-solid border-gray-box-border rounded-xl flex flex-col py-8 px-10 items-center gap-y-6 ">
                        <img className="w-20" src={protect}/>
                        <p className="text-2xl font-medium">Proteção</p>
                        <small className="text-left text-base">A proteção por autenticação é uma medida de segurança importante para garantir que somente usuários autorizados possam acessar e executar determinado script em um ambiente como o FiveM. Essa medida de segurança ajuda a evitar o vazamento de recursos e scripts do servidor, o que pode comprometer a segurança do sistema e dos usuários.</small>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="2000" className="w-480 h-465 bg-gray-box border-2 border-solid border-gray-box-border rounded-xl flex flex-col py-8 px-10 items-center gap-y-6 ">
                        <img className="w-20" src={support}/>
                        <p className="text-2xl font-medium">Suporte</p>
                        <small className="text-left text-base">Oferecemos um suporte de alta qualidade para nossos clientes, que está disponível de segunda a sexta-feira, das 9h às 20h, e aos sábados, das 12h às 16h. Nosso suporte é projetado para ajudar nossos clientes a resolver quaisquer problemas ou dúvidas que possam surgir durante o uso de nossos produtos ou serviços.</small>
                    </div>
                    <div data-aos="zoom-in"  data-aos-duration="2000" className="w-480 h-465 bg-gray-box border-2 border-solid border-gray-box-border rounded-xl flex flex-col py-8 px-10 items-center gap-y-6 ">
                        <img className="w-20" src={optimize}/>
                        <p className="text-2xl font-medium">Otimização</p>
                        <small className="text-left text-base">Nosso principal objetivo é garantir a satisfação dos nossos clientes e dos jogadores de seus servidores. Para isso, temos um compromisso com a otimização de nossos recursos, com o objetivo de oferecer a melhor experiência possível em termos de desempenho e eficiência.</small>
                    </div>
                </div>
        </>
    )
}