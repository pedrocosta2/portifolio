import { Div, Sec, Sec2, SubTitle, Title } from "./styles";
import img from "../../public/static/img/logo/perfil.jpg";
import { Project } from "@/components/Project";
import { Projects } from "@/components/About-me-Projects";
const AboutMe = () => {
  return (
    <>
      <Sec>
        <header>
        <Title>Sobre mim</Title>
        </header>
        
        <Div>
        <img src= {img} alt="" />
        <h2>Pedro Henrique Silva Costa</h2>
        </Div>
        
        <div>
        <p>
          Minha introdução nesse mundo, assim como a de muitas pessoas, veio
          através dos games os quais começaram a me fazer apreciar a tecnologia
          em si. Além disso, eu sempre me vi como uma pessoa prática o que me
          ajuda a me identificar com a tecnologia e com sua capacidade de
          resolução de problemas, além de ser uma área que sempre evolui ela nos
          estimula a continuar sempre aprendendo e a chegar a um potencial
          maior; Outro ponto que chama minha atenção é o enorme conforto que a
          tecnologia nos traz. Então veio a ocorrer a oportunidade de entrar na
          Kenzie Academy Brasil onde me formei um desenvolvedor front-end, e
          estou terminando de cursar a área para fullstack. Por ter sido um dos
          alunos que se destacaram nas avaliações, fui convidado a participar do
          programa de monitoria da empresa onde trabalhei e desenvolvi ainda
          mais as habilidades tecnicas.
        </p>
        </div>
      </Sec>
      <Sec2>
      <SubTitle>Meus projetos</SubTitle>
      <Projects/>
      </Sec2>
      
    </>
  );
};

export default AboutMe;
