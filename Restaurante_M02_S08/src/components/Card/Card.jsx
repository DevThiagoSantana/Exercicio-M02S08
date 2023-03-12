import'./Card.css'

export const Card = ({
  nome,
  imagem,
  descricao,
  valor,
  tempoPreparo,
  }) =>{
  return (
    <div className='card'>
      <img width={300} src={imagem} alt="Imagem do produto" />
      <div className='card-info'>
        <h3 className='card-title'>{nome}</h3>
        
        <p className='card-description'>{descricao}</p>
   
        <div className='card-footer'>
        <p>{`R$ ${valor}`}</p>
        <p>{tempoPreparo}</p>
        </div>
      </div>
    </div>
    

  )

}