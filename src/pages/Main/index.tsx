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

const current = new Date().getTime();
const min = 1000 * 60;
const dummyMemes: Omit<Meme, 'position'>[] = [
  {
    id: 'asr23ad-123hi3sd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'L',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    createdTime: current - min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12ed5df',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'L',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    createdTime: current - 5 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12edd3f',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    createdTime: current - 20 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123h1isd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    createdTime: current - 30 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-123hisd-12edd6f',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'M',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    createdTime: current - 2 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-1923hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    createdTime: current - 0 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-1a23hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x400/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x400/000/fff',
    createdTime: current - 15 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-12f3hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/400x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/400x600/000/fff',
    createdTime: current - 13 * min,
    blur: 0,
    stickers: [],
  },
  {
    id: 'asr23ad-12h3hisd-12eddf',
    owner: '올리',
    ownerProfileURL: 'https://dummyimage.com/600x600/000/fff',
    size: 'S',
    imageURL: 'https://dummyimage.com/600x600/000/fff',
    createdTime: current - 7 * min,
    blur: 0,
    stickers: [],
  }
]