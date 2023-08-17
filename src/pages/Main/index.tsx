import React from "react";
import Container from "./styles";
import MemeList from "./MemeList";
import useMemes from "../../hooks/queries/useMemes";
import UserCard from "./UserCard";
import CreationButton from "../../components/CreationButton";
import Onboarding from "../../components/Onboarding/Onboarding";

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
  const { memesTimeLine } = useMemes();

  const getHasOnboarding = localStorage.getItem("hasOnboarding");
  const hasOnboarding = Boolean(getHasOnboarding);

  return (
    <Container>
      {!hasOnboarding && <Onboarding />}
      <MemeList memesTimeLine={memesTimeLine} />
      <UserCard />
      <CreationButton />
    </Container>
  );
};

export default Main;
