import React from "react";
import Layout from "./styles";
import MemeList from "./MemeList";
import useMemes from "../../hooks/queries/useMemes";
import UserCard from "./UserCard";
import CreationButton from "../../components/CreationButton";
import Onboarding from "../../components/Onboarding/Onboarding";

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
  const { memes } = useMemes();

  const getHasOnboarding = localStorage.getItem("hasOnboarding");
  const hasOnboarding = Boolean(getHasOnboarding);

  return (
    <Layout>
      {!hasOnboarding && <Onboarding />}
      <MemeList memes={memes} />
      <UserCard />
      <CreationButton />
    </Layout>
  );
};

export default Main;
