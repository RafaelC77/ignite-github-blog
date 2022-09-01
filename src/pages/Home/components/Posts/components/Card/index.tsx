import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { setDistance } from "../../../../../../utils/formatDate";

import { CardComponent, CardHeader } from "./styles";

interface CardProps {
  title: string;
  content: string;
  updatedAt: string;
}

export function Card({ title, content, updatedAt }: CardProps) {
  const distance = setDistance(updatedAt);

  const preview = content.split(" ", 27).join(" ").concat("...");

  return (
    <CardComponent>
      <CardHeader>
        <h3>{title}</h3>
        <span>Há {distance}</span>
      </CardHeader>

      <ReactMarkdown>{preview}</ReactMarkdown>
    </CardComponent>
  );
}
