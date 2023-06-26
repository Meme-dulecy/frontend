import React from 'react'
import Layout from './styles';
import Text from '../../components/Text';
import MemeList from './MemeList';
import useMemes from '../../hooks/queries/useMemes';

interface MainProps {
  
}

const Main: React.FC<MainProps> = (props) => {
  const { memes, isLoading } = useMemes();
  return (
    <Layout>
      <MemeList memes={memes} />
    </Layout>
  )
}

export default Main;
