import styled from "styled-components";
import Title from "../Title";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "./Loading";

const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1m;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 0.5em auto;
  }
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
  align-items: center;
  width: 100%;
`;

const ContainerFotos = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.5em;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Galeria = () => {
  //const {setTag, alSeleccionarFoto, manejoFavoritos} = useContext(GlobalContext);
  const { state } = useContext(GlobalContext);


  return (
    <>
      <Tag />
      {
        state.fotosGaleria.length === 0 ?
         <Loading /> :
          <GaleriaContainer>
            <SeccionFluida>
              <Title>Navegue por la galería</Title>
              <ContainerFotos>
                {state.fotosGaleria
                  .filter((foto) => {
                    return (
                      state.filtro == "" ||
                      foto.titulo
                        .toLocaleLowerCase()
                        .normalize("NFD")
                        .replace(/\p{Diacritic}/gu, "")
                        .includes(
                          state.filtro
                            .toLocaleLowerCase()
                            .normalize("NFD")
                            .replace(/\p{Diacritic}/gu, "")
                        )
                    );
                  })
                  .map((foto) => (
                    <Imagen key={foto.id} foto={foto} />
                  ))}
              </ContainerFotos>
            </SeccionFluida>
            <Populares />
          </GaleriaContainer>
      }

    </>
  );
};

export default Galeria;
