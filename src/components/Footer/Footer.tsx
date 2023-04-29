import logo from "../../assets/denver.svg"

export function Footer() {
    return(
        <>
        <div className="w-screen h-52 bg-gray-customer-background flex items-center justify-around">
            <img className="opacity-10 grayscale" src={logo}/>
            <small className="grayscale text-gray-500">© Copyright Denver Studio. Todos direitos reservados. <br />  Nosso email para contato: denverstudio.br@gmail.com</small>
        </div>
        </>
    )
}