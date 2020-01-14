import React,{Component}  from 'react';
import './App.css';
import Feito  from '../img/Feito.png';
import Playlist  from '../img/Playlist.png';
import Estacao  from '../img/Estacao.png';
import Musicas  from '../img/Musicas.png';
import Disco  from '../img/Disco.png';
import Artista  from '../img/Artista.png';
import PodCast  from '../img/PodCast.png';
import Video from '../img/Video.png';


import Colecao from '../img/Colecao.jpg';
import Colecao2 from '../img/Colecao2.jpg';
import Colecao3 from '../img/Colecao3.jpg';
import Colecao4 from '../img/Colecao4.jpg';
import Morbid from '../img/Morbid.jpg';



import Download from '../img/Downloads.png';
import Menu from '../img/Menu.png';


import Exibir from '../img/Exibir.png';
import Play from '../img/Play.png';

import Inicio from '../img/Inicio.png';
import Busca from '../img/Busca.png';
import Biblioteca from '../img/Biblioteca.png';


class App extends Component {
  render(){
    return (
      <div>
        <div id="topo">
        <strong><span>Sua Biblioteca</span> </strong>  
        </div>

        <div id="meio">
   
            <div id="efeito">
            <img src={Feito} alt="Feito por você"></img>
             <span id="titulo">Feito por você </span>
            </div>

            <div id="efeito">
            <img src={Playlist} alt="PlayList"></img>
             <span id="titulo">Playlist</span>
            </div>

            <div id="efeito">
            <img src={Estacao} alt="Estação"></img>
             <span id="titulo">Estação</span>
            </div>
            
            <div id="efeito">
            <img src={Musicas} alt="Musicas"></img>
             <span id="titulo">Músicas</span>
            </div>

            <div id="efeito">
            <img src={Disco} alt="Álbuns"></img>
             <span id="titulo">Álbuns</span>
            </div>

            <div id="efeito">
            <img src={Artista} alt="Artista"></img>
             <span id="titulo">Artista</span>
            </div>

            <div id="efeito">
            <img src={PodCast} alt="PodCast"></img>
             <span id="titulo">Podcasts</span>
            </div>

            <div id="efeito">
            <img src={Video} alt="Video"></img>
             <span id="titulo">Videos</span>
            </div>
            
  
           
        </div>


        <div>
        
          <div id="meio2">
              <div id="tocadas" >
                 <strong><span>Tocadas Recentemente</span></strong> 
               </div>

               

              <div className="row">

                  <div className="column1" >
                  <img src={Colecao}></img>
                  </div>

                  <div className="column2" >
                   <span id="descricaoPlay"><strong>Sertanejão</strong></span>
                    <img id="download" src={Download}></img>
                    <span id="descricao">PlayList</span> 
                  </div>

                  <div className="column3">
                    <img id="menu" src={Menu}></img>
                  </div>

               </div>

               <div className="row">

                      <div className="column1" >
                      <img src={Colecao2}></img>
                      </div>

                      <div className="column2" >
                      <span id="descricaoPlay2">Boas</span>
                        <img id="download" src={Download}></img>
                        <span id="descricao">PlayList</span> 
                      </div>

                      <div className="column3">
                        <img id="menu" src={Menu}></img>
                      </div>

                  </div>

                  <div className="row">

                        <div className="column1" >
                        <img src={Morbid}></img>
                        </div>

                        <div className="column2" >
                        <span id="descricaoPlay2">Kingdoms Disdained</span>
                          <span id="descricao1">Album ° Artista Morbid Angel</span> 
                        </div>

                        <div className="column3">
                          <img id="menu" src={Menu}></img>
                        </div>

                    </div>

                    <div className="row">

                          <div className="column1" >
                          <img id="circulo" src={Morbid}></img>
                          </div>

                          <div className="column2" >
                          <span id="descricaoPlay2">Kingdoms Disdained</span>
                            <span id="descricao1">Artista</span> 
                          </div>

                          <div className="column3">
                            <img id="menu" src={Menu}></img>
                          </div>

                      </div>
                    
                    <div className="row">

                      <div className="column1" >
                      <img src={Colecao3}></img>
                      </div>

                      <div className="column2" >
                      <span id="descricaoPlay2">Juntos em Shallow</span>
                        <img id="download" src={Download}></img>
                        <span id="descricao">PlayList</span> 
                      </div>

                      <div className="column3">
                        <img id="menu" src={Menu}></img>
                      </div>

                  </div>

                  <div className="row">

                      <div className="column1" >
                      <img src={Colecao4}></img>
                      </div>

                      <div className="column2" >
                      <span id="descricaoPlay2">Internacional</span>
                        <img id="download" src={Download}></img>
                        <span id="descricao">PlayList</span> 
                      </div>

                      <div className="column3">
                        <img id="menu" src={Menu}></img>
                      </div>

                  </div>

                 
          
            </div>
            
        </div>
          

       
        
      
        <div id="reproduzir">
         
            <div className="linha">

                <div className="colun1" >
                    <img  src={Exibir} alt="Musica" />
                </div>

                <div className="colun2" >
                <div className="marquee"><span>Obrigado Por Estragar Tudo (Ao Vivo)</span></div>
                </div>

                <div className="colun3" >
                <div><img src={Play} alt="So Corno Ouve" /></div>
              </div>

              </div>

              <div id="linha2">

                  <div className="coluna1" >
                    <img  src={Inicio} alt="Inicio"/>

                    <div id="inicio">
                       <span>Inicio</span> 
                    </div>
                    
                  </div>

                  <div className="coluna2" >
                      <img  src={Busca} alt="Buscar"/>

                    <div id="buscar">
                       <span>Busca</span> 
                    </div>
                    
                  </div>

                  <div className="coluna3" >
                      <img src={Biblioteca} alt="Biblioteca"/>

                    <div id="biblioteca">
                       <span>Sua Biblioteca</span> 
                    </div>
                    
                  </div>

              </div>  

        </div>
      </div>

    )
  }
}
export default App;