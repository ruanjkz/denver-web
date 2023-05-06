import logo from "../../assets/denver.svg"
import * as Scroll from 'react-scroll';

export function Header() {
    var Link = Scroll.Link;
    return (
        <>
            <div className="h-40 flex items-center justify-between font-medium w-9/12">
                <img  src={logo}/>
                <div className="flex gap-10 max-sm:hidden">
                    <p className="cursor-pointer">Início</p>
                    <Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={0} duration={1000}>
                    <p className="cursor-pointer">Sobre</p>
                    </Link>
                    <Link activeClass="active" to="customers" spy={true} smooth={true} offset={50} duration={2000}>
                    <p className="cursor-pointer">Clientes</p>
                    </Link>
                    <Link activeClass="active" to="lastProduct" spy={true} smooth={true} offset={50} duration={2000}>
                    <p className="cursor-pointer">Ult. Produto</p>
                    </Link>
                    <Link activeClass="active" to="FAQ" spy={true} smooth={true} offset={50} duration={1000}>
                    <p className="cursor-pointer">FAQ</p>
                    </Link>
                </div>
                <a className="w-24 flex items-center justify-center h-12 border-2 border-solid border-purple-primary rounded-lg text-purple-primary hover:bg-purple-primary hover:text-white transition duration-300 ease-in-out" href="https://discord.gg/xSVUAJYeNS"  target="_blank">Discord</a>
            </div>
        </>
    )
}
