import React from 'react'
import Layout from './styles';
import Text from '../../components/Text';
import MemeList from './MemeList';

interface MainProps {
  
}

const Main: React.FC<MainProps> = (props) => {
  const memes = dummyMemes
  return (
    <Layout>
      <MemeList memes={memes} />
    </Layout>
  )
}

export default Main;

const dummyMemes: Meme[] = [
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    // ownerProfileURL: '',
    size: 'large',
    // imageURL: 'string',
    position: { x: 0, y: 0},
    blur: 0,
    stickers: [],
  }
]