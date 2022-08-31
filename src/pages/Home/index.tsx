import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <Posts />
    </HomeContainer>
  );
}
