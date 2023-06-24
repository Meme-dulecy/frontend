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
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'L',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'L',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    position: { x: 0, y: 0 },
    blur: 0,
    stickers: [],
  }
]