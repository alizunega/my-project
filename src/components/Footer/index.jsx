import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;
const IconList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;
const FooterText = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <IconList>
        <li>
          <a>
            <img />
          </a>
        </li>
        <li>
          <a>
            <img />
          </a>
        </li>
        <li>
          <a>
            <img />
          </a>
        </li>
      </IconList>
      <FooterText>Desarrollado por Alicia </FooterText>
    </StyledFooter>
  );
};

export default Footer;
