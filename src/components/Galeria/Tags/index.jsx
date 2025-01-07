/* eslint-disable react/prop-types */
import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4em;
  margin-top: 4em;

  @media screen and (max-width: 800px) {
    gap: 1em;
    align-items: left;
    width: 100%;
    margin: 2em .8em;
  }
`;

const StyledTitleTag = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const StyledTag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding: .3em;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 1.5em;
  justify-content: end;
  @media screen and (max-width: 800px) {
    gap: 0.5em;
    justify-content: start;
    padding: .2em .3em;
  }
`;

const Tag = ({ setTag }) => {
  //   console.log(tags);
  return (
    <TagsContainer>
      <StyledTitleTag>Buscar por tags:</StyledTitleTag>
      <StyledDiv>
        {tags.map((tag) => {
          return (
            <StyledTag
              key={tag.id}
              onClick={() => {
                setTag(tag.tag);
              }}
            >
              {tag.titulo}
            </StyledTag>
          );
        })}
      </StyledDiv>
    </TagsContainer>
  );
};

export default Tag;
