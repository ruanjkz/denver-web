import logo from "../../assets/denver.svg"
import * as Scroll from 'react-scroll';

export function Header() {
    var Link = Scroll.Link;
    return (
        <>
            <div className="h-40 flex items-center justify-between font-medium w-9/12">
                <img src={logo}/>
                <div className="flex gap-10">
                    <p className="cursor-pointer">Início</p>
                    <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={0} duration={1000}>
                    <p className="cursor-pointer">Sobre</p>
                    </Link>
                    <Link activeClass="active" to="aboutUssss" spy={true} smooth={true} offset={50} duration={1000}>
                    <p className="cursor-pointer">Feedback</p>
                    </Link>
                    <Link activeClass="active" to="customers" spy={true} smooth={true} offset={50} duration={2000}>
                    <p className="cursor-pointer">Clientes</p>
                    </Link>
                    {/* <p className="cursor-pointer">Feedback</p>
                    <p className="cursor-pointer">Clientes</p> */}
                    <p className="cursor-pointer">Contato</p>
                </div>
                <a className="w-24 flex items-center justify-center h-12 border-2 border-solid border-purple-primary rounded-lg text-purple-primary hover:bg-purple-primary hover:text-white transition duration-300 ease-in-out" href="https://discord.gg/QPv2XVY494"  target="_blank">Discord</a>
            </div>
        </>
    )
}