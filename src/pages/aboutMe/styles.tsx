

import styled from "styled-components";
import { Project } from "@/components/Project/style";


export const Box = styled.div`
width: 100vw;

@media (max-width: 480px) {
  width: 120vw;
}

@media (max-width: 380px) {
  width: 145vw;
}
`

export const Header = styled.header`
    left: 0;
    width: 100%;
    background-color:var(--colors-brand1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
     button {
      background-color: white;
      color:var(--colors-brand1);
      border: none;
      height: 35px;
      width: 80px;
      border-radius: 20px;
     }
  
`

export const Sec = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

 

  div {
    width: 80%;
  }
  img {
    height:  65px;
    width: 70px;
    border-radius: 100%;
    align-self: flex-start;
  }
`;

export const Division = styled.div`

`

export const Title = styled.h1`
width: 80%;
  font-size: 30px;
  color: white;
  margin: 7px 0 20px;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  margin: 30px 0 20px;
`;
export const Div = styled.section`
width: 80%;
display: flex;
align-items: center;
gap: 10px;
`
export const Sec2 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  li {
    height: 240px;
    border: solid black;
    border-radius: 20px;
    width: 20%;
  }

  
`