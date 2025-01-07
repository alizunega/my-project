/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledListItem = styled.li`
    font-size: 30px;
    margin-bottom: 30px;
    line-height:28px;
    display:flex;
    align-items:center;
    gap: 16px;


    //condicional para estilos de letra de anchor
   a{
    color:${props =>
        props.$activo ? "#7B78E5" : "#D9D9D9"
    };
    font-family:${props =>
        props.$activo ? "GandhiSansBold" : "GandhiSansRegular"
    };

   }
   @media screen  and (max-width: 800px){
        flex-direction: row;
        font-size: 20px;
    }
   
`


const ItemNav = ({ children, iconoActivo, iconoInactivo, activo }) => {

    return (
        <StyledListItem $activo={activo}>
            {activo ? iconoActivo : iconoInactivo}
            {children}
        </StyledListItem>
    );
}
export default ItemNav;