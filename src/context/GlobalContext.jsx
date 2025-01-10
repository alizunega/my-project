/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useReducer } from "react";

const GlobalContext = createContext();

const URL = "http://localhost:8080/fotos";

//estados iniciales
const initialState = {
  filtro: "",
  fotosGaleria: [],
  fotoSeleccionada: null,
  tag: 0,
};

//acciones para eventos definidos
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTRO":
      return { ...state, consulta: action.payload };
    case "SET_FOTOS_GALERIA":
      return { ...state, fotosGaleria: action.payload };
    case "SET_FOTO_SELECCIONADA":
      return { ...state, fotoSeleccionada: action.payload };
    case "SET_TAG":
      return { ...state, tag: action.payload };
    case "SET_MANEJO_FAVORITOS":
      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          fotosGaleria: state.fotosGaleria.map((fotoGaleria) => {
            return {
              ...fotoGaleria,
              fav: fotoGaleria.id === action.payload.id ? !action.payload.fav : fotoGaleria.fav,
            };
          }),
          fotoSeleccionada: {
            ...state.fotoSeleccionada,
            fav: !state.fotoSeleccionada.fav,
          },
        };
      } else {
        return {
          ...state,

          fotosGaleria: state.fotosGaleria.map((fotoGaleria) => {
            return {
              ...fotoGaleria,
              fav: fotoGaleria.id === action.payload.id ? !action.payload.fav : fotoGaleria.fav,
            };
          }),
        };
      }
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  //implementacion useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [filtro, setFiltro] = useState("");
  // const [fotosGaleria, setFotosGaleria] = useState([]);
  // const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  // const [tag, setTag] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(URL);
      const data = await resp.json();
      //setFotosGaleria([...data]);

      dispatch({ type: "SET_FOTOS_GALERIA", payload: data });
    };
    setTimeout(
      () => {
        getData();
      }, 5000
    )
 
  }, []);

  //manejo favoritos (marca)

  // //manejo filtro buscar (por tags o por palabra clave en buscador)
  // useEffect(() => {
  //   const fotosFiltradas = fotosGaleria.filter((foto) => {
  //     const filtroTag = !tag || foto.tagId === tag;
  //     const filtroTitulo =
  //       !filtro ||
  //       foto.titulo
  //         .toLocaleLowerCase()
  //         .normalize("NFD")
  //         .replace(/\p{Diacritic}/gu, "")
  //         .includes(
  //           filtro
  //             .toLocaleLowerCase()
  //             .normalize("NFD")
  //             .replace(/\p{Diacritic}/gu, "")
  //         );

  //     //  Ayuda a normalizar el texto quitando acentos y cualquier simbolo de puntuacion
  //     // .normalize("NFD")
  //     // .replace(/\p{Diacritic}/gu, "")

  //     return filtroTag && filtroTitulo;
  //   });
  //   setFotosGaleria(fotosFiltradas);
  // }, [fotosGaleria, filtro, tag]);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
export default GlobalContextProvider;
