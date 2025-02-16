import { useContext } from "react";
import GlobalContext from './context'
 
function useFotoModal(){
    const{ state, dispatch } = useContext(GlobalContext);

    const abrirModal= (foto)=>{
        dispatch({
            type: 'SET_FOTO_SELECCIONADA',
            payload: foto
        })
    }
    const cerrarModal= ()=>{
        dispatch({
            type: 'SET_FOTO_SELECCIONADA',
            payload: null
        })
    }

    const fotoSeleccionada = state.fotoSeleccionada;
    const estaAbierto = state.modalAbierto;

    return { fotoSeleccionada, estaAbierto, abrirModal, cerrarModal }

}

export default useFotoModal