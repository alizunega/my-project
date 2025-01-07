import styled from 'styled-components';


const Title = styled.h1`
    font-size: 24px;
    color: #7B78E5;
    text-align: ${props => props.$align ? props.$align : "left" };

    @media screen and (min-width: 768px){
        font-size: 38px;
    }
`

export default Title