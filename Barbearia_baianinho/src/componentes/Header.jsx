import logo1 from '../imagens/logoheader.png'
import baiano from '../imagens/Bahianinho.png'
function Header(){
    return(
    <div>
        <header>
            <div className='logo'>
                <img src={logo1} alt="" />
                <img src={baiano} alt="" />
            </div>

            <nav>
                <li>
                    <ul>Quem somos</ul>
                    <ul>Contato</ul>
                    <ul>Serviços</ul>
                    <ul>Localização</ul>
                </li>
            </nav>
            <div className="phone">
                <a href="">Entre em contato</a>
            </div>
        </header>
    </div>
    )
}

export default Header