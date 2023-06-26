import React from 'react';
import Layout from './styles';
import MemeList from './MemeList';
import useMemes from '../../hooks/queries/useMemes';
import UserCard from './UserCard';
import CreationButton from '../../components/CreationButton';

interface MainProps {}

const Main: React.FC<MainProps> = (props) => {
  const { memes } = useMemes();

  return (
    <Layout>
      <MemeList memes={memes} />
      <UserCard />
      <CreationButton />
    </Layout>
  );
};

export default Main;
