import './Produtos.css';
import { Card } from '../../components/Card';
import {useProdutos} from'../../hooks/useProdutos';

export const Produtos =() =>{

  const{error,isLoading,produtos} = useProdutos();

  return(
      <section className='secao'>
          <h2 className='secao-titulo'>Produtos</h2>
          <hr />
          <div className='lista'>
          <Card
          imagem = "http://localhost:8081/assets/cordeiro.png"
          nome = "Cordeiro Lajeana"
          descricao = "Carré grelhado com delicado molho de três pimentas, batata suíça e banana caramelada."
          valor = {169}
          tempoPreparo = "50 min"/>
          </div>
      </section>
  )
}