/* eslint-disable react/prop-types */

import styled from "styled-components";
import InputSearch from "../InputSeach";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.75em 0;
    margin-left: 1em; 
    img{
        width: 8em;
    }  
`


const Header = ({filtro, setFiltro}) => {
    return <HeaderStyled>
        <img src="./img/video.png" alt="Logo App Videos" />
        <InputSearch filtro={filtro} setFiltro={setFiltro}  />
    </HeaderStyled>
}

export default Header;