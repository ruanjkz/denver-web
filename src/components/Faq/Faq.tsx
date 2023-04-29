import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';


export function Faq(){
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <>
        <div id="FAQ" className="w-9/12 flex flex-col items-center  mt-40 mb-16">
            <h2 data-aos="zoom-in" data-aos-duration="1000" className="font-bold text-5xl mt-44 text-center">Perguntas Frequentes</h2>
            <p data-aos="zoom-in" data-aos-duration="1000" className="font-semibold text-medium text-lg mt-6 text-center">Tire todas as suas dúvidas antes de comprar, confira as <br /> respostas para as perguntas mais frequentes em nossa loja.</p>
            <div  className="flex flex-col gap-y-16 mt-24">
                <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col gap-y-2">
                    <h3 className="font-bold text-base">Como realizar pagamentos com segurança na nossa loja online?</h3>
                    <small className="text-small text-left">Aceitamos diversas formas de pagamento, incluindo PIX, PICPAY, boleto bancário e Mercado Pago. <br /> É importante ressaltar que qualquer tentativa de fraude será punida  com banimento do nosso  Discord  <br />  e inclusão na lista negra da nossa loja. Para garantir a segurança dos nossos clientes, trabalhamos com  <br /> sistema de pagamento antecipado de 50%. Dessa forma, não iniciaremos qualquer trabalho sem o recebimento  <br /> do valor correspondente. Ao efetuar o pagamento, você automaticamente concorda com os termos de uso e política  <br /> de privacidade da nossa loja.</small>
                    <hr />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000"  className="flex flex-col gap-y-2">
                    <h3 className="font-bold text-base">Qual é o processo de reembolso em caso de insatisfação com o produto?</h3>
                    <small className="text-small text-left">Se você não estiver satisfeito com um recurso que comprou em nossa loja, entre em <br /> contato conosco o mais rápido possível. Se o motivo do seu descontentamento for <br /> justificável, forneceremos um reembolso completo.</small>
                    <hr />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col gap-y-2">
                    <h3 className="font-bold text-base">Quais são as informações importantes para quem deseja adquirir scripts em nossa loja?</h3>
                    <small className="text-small text-left">Uma vez iniciado o trabalho, não serão aceitos pedidos de reembolso. Por isso, recomendamos que os clientes <br /> escolham cuidadosamente o script antes de finalizar a compra. Estamos preparados para desenvolver qualquer tipo <br /> de ideia dos nossos clientes e trabalhamos com orçamentos personalizados. Para solicitar um orçamento, basta entrar <br /> em contato conosco e informar suas necessidades.</small>
                    <hr />
                </div>
            </div>
        </div>
        </>
    )
}