/* eslint-disable react/prop-types */
import styled from 'styled-components';
import ItemNav from '../ItemNav';
import { AiFillHome, AiTwotoneHome, AiFillStar, AiTwotoneStar , AiOutlineVideoCameraAdd, AiFillHeart, AiOutlineHeart, AiFillVideoCamera} from 'react-icons/ai';


const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: left;
    @media screen  and (max-width: 800px){
        flex-direction: row;
        gap: .8em;
        font-size: 20px;
        justify-content: center;
    }

`

{/* inactivo <AiOutlineHeart /> */}
{/* agregar archivo <AiFillFileAdd /> */}
{/* desactivado  <AiOutlineFileAdd /> */}
{/*para los vids agregados  <AiFillVideoCamera /> */}
{/* para agregar videos  <AiOutlineVideoCameraAdd /> */}
{/* activo  <AiFillHeart /> */}
{/* para los favs o destacados <AiFillStar /> */}





const LateralNav = ({
    homeIconActive= <AiFillHome style={{width:"38px",height:"38px"}} />,
    homeIconInactive= <AiTwotoneHome style={{width:"38px",height:"38px"}}/>,
    starIconActive= <AiFillStar style={{width:"38px",height:"38px"}}/>,
    starIconInactive= <AiTwotoneStar style={{width:"38px",height:"38px"}}/>,
    addIconInactive = <AiOutlineVideoCameraAdd  />,
    addIconActive = <AiFillVideoCamera style={{width:"38px",height:"38px"}} />, 
    favIconActive =<AiFillHeart style={{width:"38px",height:"38px"}} />,
    favIconInactive = <AiOutlineHeart style={{width:"38px",height:"38px"}} />
}) => {
    return (
        <aside>
            <nav>
                <StyledList>
                    {/* <AiFillHome /> */}
                    {/* <AiTwotoneHome /> */}
                    <ItemNav iconoActivo={homeIconActive} iconoInactivo={homeIconInactive} activo  >
                        <a href="#">Home</a>
                    </ItemNav>
                    <ItemNav iconoActivo={starIconActive} iconoInactivo={starIconInactive} >
                        <a href="#">Destacados</a>
                    </ItemNav>
                    <ItemNav iconoActivo={favIconActive} iconoInactivo={favIconInactive} >
                        <a href="#">Favoritos</a>
                    </ItemNav>
                    <ItemNav iconoActivo={addIconActive} iconoInactivo={addIconInactive} >
                        <a href="#">Nuevos</a>
                    </ItemNav>

                </StyledList>
            </nav>
        </aside>
    );
};



export default LateralNav;