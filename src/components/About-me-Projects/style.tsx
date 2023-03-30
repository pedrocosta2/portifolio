import { styled as s } from "../../styles/stitches.config";
import { Flex } from "../../styles/Global"
import { Text } from "../../styles/Text"
import  styled  from "styled-components";



export const Sec = styled.section`
width: 90%;
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
`

export const Card = styled.div`
width: 25%;
padding: 20px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: solid black;
background-color: var(--colors-brand1);
border-radius: 10%;
`

export const Paragraph = styled.p`
overflow-y: scroll;
height: 60px;
::-webkit-scrollbar {
  width: 10px;

}

::-webkit-scrollbar-thumb {
  background-color: #ffffff; /* Define a cor do botão de rolagem */
}
`


export const ProjectStack = s(Flex, {
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectStackTech = s("span", {
  backgroundColor: "$brand4",
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = s(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = s("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey1"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});
