//background-image: linear-gradient(to right top, #2e7ef7, #2b5eca, #22409e, #152475, #02094e);
import { styled } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import LateralNav from "./components/LateralNav";
import Banner from "./components/Banner";
import banner from "./assets/img/banner.jpg";
import Galeria from "./components/Galeria";
import fotos from './fotos.json'
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const FondoGradiente = styled.div`
  background-image: linear-gradient(to left top, #02094e, #152475, #22409e, #2b5eca, #2e7ef7);
  width: 100dvw;
  min-height: 100dvh;

`;

const AppContainer = styled.div`
  width: 1800px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2em;
  @media screen  and (max-width: 800px){
        flex-direction: column;
    }

`;
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  img {
    width: 460px;
  }
`;


//const theme = { backgroundColor: "#f5f5f5", textColor: "#333" }

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);


  //manejo filtro buscar (por tags o por palabra clave en buscador)
useEffect(()=>{
  const fotosFiltradas = fotos.filter(foto =>{
    const filtroTag = !tag || foto.tagId === tag;
    const filtroTitulo = !filtro || foto.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
    return filtroTag && filtroTitulo
  })
  setFotosGaleria(fotosFiltradas)
}, [filtro, tag])


//manejo favoritos (marca)
  const manejoFavoritos = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        fav: !foto.fav
      })
    }
    // console.log(foto)
    setFotosGaleria(fotosGaleria.map(
      fotoGaleria => {
        return {
          ...fotoGaleria,
          fav: fotoGaleria.id === foto.id ? !foto.fav : fotoGaleria.fav
        }
      }
    ))

  }

  return (
    // <ThemeProvider theme={theme}>
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Header 
          filtro={filtro}
          setFiltro={setFiltro} />
          <MainContainer>
            <LateralNav />
            <ContenidoGaleria>
              <Banner text={"Galeria de imagenes"} backgroundImage={banner} />
              <Galeria
                fotos={fotosGaleria}
                setFotosGaleria={setFotosGaleria}
                alSeleccionarFoto={foto => { setFotoSeleccionada(foto) }}
                manejoFavoritos={manejoFavoritos}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          manejoFavoritos={manejoFavoritos} />

          <Footer  />
      </FondoGradiente>


    </>
    // </ThemeProvider>
  );
}

export default App;
