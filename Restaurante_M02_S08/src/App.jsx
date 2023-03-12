import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='main'>
        <h2>Produtos</h2>
        <Card
        imagem = "http://localhost:8081/assets/cordeiro.png"
        nome = "Cordeiro Lajeana"
        descricao = "Carré grelhado com delicado molho de três pimentas, batata suíça e banana caramelada."
        valor = {169}
        tempoPreparo = "50 min"/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
