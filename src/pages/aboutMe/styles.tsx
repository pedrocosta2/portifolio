

import styled from "styled-components";
import { Project } from "@/components/Project/style";
export const Sec = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  header {
    width: 100%;
    background-color:var(--colors-brand1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

export const Title = styled.h1`
  font-size: 30px;
  color: white;
  margin: 7px 0 20px;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  color: var(--primary);
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