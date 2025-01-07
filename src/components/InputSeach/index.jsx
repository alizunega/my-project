/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import { AiOutlineSearch } from 'react-icons/ai'


const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: 0 1em;
`;

const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`


const InputSearch = ({ filtro, setFiltro, ...props }) => {
    
    return (
        <StyledContainer>
            <StyledInput 
            placeholder="Busca una foto" 
            onChange={(e)=>{
                setFiltro(e.target.value);
            }}
            type="text"
            value={filtro}

            {...props}
            />
            <AiOutlineSearch style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "38px",
                height: "38px",
                color: "white"
            }} />
        </StyledContainer>
    )
}
export default InputSearch