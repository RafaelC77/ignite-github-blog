import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function setDistance(date: string) {
  const distance = formatDistance(new Date(), new Date(date), {
    locale: ptBR,
  });

  return distance;
}
