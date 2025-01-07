/* eslint-disable react/prop-types */
import { AiOutlineCloseCircle } from "react-icons/ai";


import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono";


const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;


`
const StyledDialog = styled.dialog`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    border: 0;
    display: flex;
    justify-content: center;
    width: 100%;

    form {
        button {
            position: relative;
            top: 20px;
            right: 90px;
        }
    }


`;



const ModalZoom = ({ foto, alCerrar, manejoFavoritos}) => {

    return <>
        {foto && <>
            <Overlay />
            <StyledDialog open={!!foto} onClose={alCerrar}>
                <Imagen foto={foto} expandida={true} manejoFavoritos={manejoFavoritos} />
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <AiOutlineCloseCircle  style={{width:"3em"}}/>
                    </BotonIcono>
                </form>
            </StyledDialog>

        </>}
    </>


}

export default ModalZoom
