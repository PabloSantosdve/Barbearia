import Sytles from './Header.module.css'
import logo1 from '../imagens/logoheader.png'
import baiano from '../imagens/Bahianinho.png'
function Header(){
    return(
    <div>
        <header>
            <div className={Sytles.logo}>
                <img src={logo1} alt=""  className={Sytles.logo_header}/>
                <img src={baiano} alt="" className={Sytles.nome}/>
            </div>

            <nav>
                <li>
                    <a href="" className={Sytles.link_nav}>
                        <ul>Quem somos</ul>
                    </a>
                    <a href="" className={Sytles.link_nav}>
                        <ul>Contato</ul>
                    </a>
                    <a href="" className={Sytles.link_nav}>
                        <ul>Serviços</ul>
                    </a>
                    <a href="" className={Sytles.link_nav}>
                        <ul>Localização</ul>
                    </a>
                </li>
            </nav>
            <div className={Sytles.phone}>
                <a href="" className={Sytles.contact}>Entre em contato</a>
            </div>
        </header>
    </div>
    )
}

export default Header