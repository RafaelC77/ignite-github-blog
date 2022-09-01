import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { setDistance } from "../../../../../../utils/formatDate";

import { CardContainer, CardContent, CardHeader } from "./styles";

interface CardProps {
  title: string;
  content: string;
  updatedAt: string;
  number: number;
}

export function Card({ title, content, updatedAt, number }: CardProps) {
  const distance = setDistance(updatedAt);

  const preview = content.split(" ", 27).join(" ").concat("...");

  return (
    <CardContainer>
      <NavLink to={`/post/${number}`}>
        <CardContent>
          <CardHeader>
            <h3>{title}</h3>
            <span>Há {distance}</span>
          </CardHeader>

          <ReactMarkdown>{preview}</ReactMarkdown>
        </CardContent>
      </NavLink>
    </CardContainer>
  );
}
