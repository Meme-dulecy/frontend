import React from 'react'
import Layout from './styles';
import MemeList from './MemeList';
import useMemes from '../../hooks/queries/useMemes';

interface MainProps {
  
}

const Main: React.FC<MainProps> = (props) => {
  const { memes } = useMemes();
  return (
    <Layout>
      <MemeList memes={memes} />
    </Layout>
  )
}

export default Main;
