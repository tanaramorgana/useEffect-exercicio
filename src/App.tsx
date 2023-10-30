import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import './App.css';


interface CatApiResponse {
  url: string; 
}

function App() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => res.json())
      .then((data: CatApiResponse[]) => {
        const catImages = data.map((cat) => cat.url);
        setImages(catImages);
        console.log('Dados coletados com sucesso');
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao coletar os dados', error);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="banner">
        <img src="https://s1.1zoom.me/b5050/459/266451-alexfas01_1366x768.jpg" alt="" />
      </div>

      <div className="titulo">
        <h1 className="titulo">
        Adoráveis Gatinhos
        </h1>
          <p className="subtitulo">Uma API com muitos felinos para praticar useEffect</p>
    </div>

    <div className="container">
      <div className="cat-container">
         {images.map((url, index) => (
           <img className="catcard" key={index} src={url} alt={`Cat ${index + 1}`} />
         ))}
    </div>
  </div>

    <footer>Copyright &copy; Jéssica, Renato, Roque e Tanara, 2023.</footer>

    </>
  );
}


export default App;