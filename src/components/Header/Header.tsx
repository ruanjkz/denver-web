import logo from "../../assets/denver.svg"

export function Header() {
    
    return (
        <>
            <div className="w-1480 h-40 flex items-center justify-between font-medium">
                <img src={logo}/>
                <div className="flex gap-10">
                    <p className="cursor-pointer">Início</p>
                    <p className="cursor-pointer">Sobre</p>
                    <p className="cursor-pointer">Feedback</p>
                    <p className="cursor-pointer">Clientes</p>
                    <p className="cursor-pointer">Contato</p>
                </div>
                <a className="w-24 flex items-center justify-center h-12 border-2 border-solid border-purple-primary rounded-lg text-purple-primary hover:bg-purple-primary hover:text-white transition duration-300 ease-in-out" href="https://discord.gg/QPv2XVY494"  target="_blank">Discord</a>
            </div>
        </>
    )
}