import {  useContext, useRef } from "react";
import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "../../context/GlobalContext";

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
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const StyledSearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  color: white;
`;

const InputSearch = ({ ...props }) => {
  const {dispatch} = useContext(GlobalContext)
 
  const cajaSearch = useRef(null);
  return (
    <StyledContainer>
      <StyledInput
        ref={cajaSearch}
        placeholder="Busca una foto"
        type="text"
        {...props}
      />
      <StyledSearchIcon
        onClick={() => {
          dispatch({ type: "SET_FILTRO", payload: cajaSearch.current.value });
        }}
      />
    </StyledContainer>
  );
};
export default InputSearch;
