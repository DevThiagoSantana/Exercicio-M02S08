import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='main'>
        <h2>Produtos</h2>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
