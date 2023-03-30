import {
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  Card,
  Sec,
  Paragraph,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

export const Projects = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <Sec>
      {repositories?.map((repository) => (
        <Card key={repository.id}>
          <Text
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey1"
          >
            {repository.name}
          </Text>

          {repository.language && (
            <ProjectStack>
              <Text type="body2">Linguagem:</Text>
              <ProjectStackTech>
                <Text color="brand1" type="body2">
                  {repository.language}
                </Text>
              </ProjectStackTech>
            </ProjectStack>
          )}
          {repository.description ? (
            <Paragraph>{repository.description}</Paragraph>
          ) : null}

          <ProjectLinks>
            <ProjectLink target="_blank" href={repository.git_url}>
              <FaGithub /> Github Code
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage}>
                <FaShare /> Aplicação
              </ProjectLink>
            )}
          </ProjectLinks>
        </Card>
      ))}
    </Sec>
  );
};
