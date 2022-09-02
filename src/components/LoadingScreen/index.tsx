import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { LoadingContainer } from "./styles";

export function LoadingScreen() {
  return (
    <LoadingContainer>
      <span>Carregando</span>
      <div>
        <FontAwesomeIcon icon={faChevronRight} />
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </LoadingContainer>
  );
}
