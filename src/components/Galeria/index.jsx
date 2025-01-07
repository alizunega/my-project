/* eslint-disable react/prop-types */

import styled from "styled-components";
import Title from "../Title";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1m;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: .5em auto;
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

const Galeria = ({
  fotos = [],
  setTag,
  alSeleccionarFoto,
  manejoFavoritos,
}) => {
  // console.log(fotos)
  return (
    <>
      <Tag setTag={setTag} />
      <GaleriaContainer>
        <SeccionFluida>
          <Title>Navegue por la galería</Title>
          <ContainerFotos>
            {fotos.map((foto) => {
              return (
                <Imagen
                  alSolicitarZoom={alSeleccionarFoto}
                  key={foto.id}
                  foto={foto}
                  manejoFavoritos={manejoFavoritos}
                />
              );
            })}
          </ContainerFotos>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
