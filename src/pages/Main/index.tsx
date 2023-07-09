import React from "react";
import Layout from "./styles";
import MemeList from "./MemeList";
import UserCard from "./UserCard";
import CreationButton from "../../components/CreationButton";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Layout>
      <MemeList />
      <UserCard />
      <CreationButton />
    </Layout>
  );
};

export default Main;
