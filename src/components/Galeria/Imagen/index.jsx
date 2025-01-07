/* eslint-disable react/prop-types */
import BotonIcono from "../../BotonIcono";
import { AiFillHeart, AiOutlineHeart, AiOutlineExpandAlt } from "react-icons/ai"


//width: ${(props) => (props.$expandida ? '90%' : '460px')};

import styled from "styled-components";

const StyledFigure = styled.figure`
    width: ${(props) => (props.$expandida ? '90vw' : '100%')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
   
    & > img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 20px 20px 0 0;
        object-fit: contain;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }
    @media screen and (min-width: 900px){
        width: 44%;
        margin: 2em auto;
        padding: 0;
        align-items: left;
    }
    @media screen and (min-width: 1024px){
        width: 30%;
    }
`;

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    
`


const Imagen = ({ foto, expandida = false, alSolicitarZoom, manejoFavoritos }) => {

    const iconoFav = foto.fav ? <AiFillHeart /> : <AiOutlineHeart />

    return (
        <StyledFigure $expandida={expandida} id={`foto-${foto.id}`} >
            <img src={foto.path} alt={`Imagen de ${foto.titulo}`} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <StyledFooter>
                    <h4>{foto.fuente}</h4>

                    <BotonIcono onClick={()=>{manejoFavoritos(foto)}}>
                        {iconoFav}
                    </BotonIcono>
                    {!expandida && <BotonIcono aria-hidden={expandida}
                        onClick={() => alSolicitarZoom(foto)}>
                        <AiOutlineExpandAlt />
                    </BotonIcono>}

                </StyledFooter>
            </figcaption>
        </StyledFigure>

    )


}

export default Imagen;

//ejemplo uso de media queries
// const Container = styled.div`
//   /* Estilos para todas las pantallas */
//   width: 100%;
//   @media (min-width: 768px) {
//     /* Estilos para pantallas a partir de 768px */
//     width: 80%;
//   }
//   @media (min-width: 1200px) {
//     /* Estilos para pantallas a partir de 1200px */
//     width: 60%;
//   }
// `;