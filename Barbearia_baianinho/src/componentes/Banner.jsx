import Styles from '../componentes/Banner.module.css'
import Logo_banner from'../imagens/logo.png'
import Barber from '../imagens/frente_banner.png'

function Banner(){
    return(
        <div>
            <div className={Styles.Image_background}>
                <img src={Barber} alt="" />

                <div className={Styles.title_banner}> 
                     <h1>
                        A Melhor Barbearia de Taboão da Serra
                     </h1>
                </div>
                
            </div>
            <div className={Styles.bx_banner}>
                <img src={Logo_banner} alt="" />
            </div>

           
        </div>
    )
}
export default Banner