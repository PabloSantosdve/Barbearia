import Estilos from '../componentes/Carrousel.module.css'
import image1  from '../imagens/Jovem_barbearia.png'
import image2  from '../imagens/Jovem_barbearia.png'
import image3  from '../imagens/Jovem_barbearia.png'
import image4  from '../imagens/Jovem_barbearia.png'
import image5  from '../imagens/Jovem_barbearia.png'
import image6  from '../imagens/Jovem_barbearia.png'
import image7  from '../imagens/Jovem_barbearia.png'




function Carrousel(){

    return(
       <div>
     
    <div id="carrousel" className={Estilos.flex}>
        <div id="1"><img src={image1} alt="" /></div>
        <div id="2"><img src={image2} alt="" /></div>
        <div id="3"><img src={image3} alt="" /></div>
        <div id="4"><img src={image4} alt="" /></div>
        <div id="5"><img src={image5} alt="" /></div>
        <div id="6"><img src={image6} alt="" /></div>
        <div id="7"><img src={image7} alt="" /></div>
    </div>

    <div className={Estilos.pages}>
        <a href="#1">1</a>
        <a href="#2">2</a>
        <a href="#3">3</a>
        <a href="#4">4</a>
        <a href="#5">5</a>
        <a href="#6">6</a>
        <a href="#7">7</a>
    </div>

  </div>

    )
}
export default Carrousel