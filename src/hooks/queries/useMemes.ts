import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '../../constants/query';
import { socketIO } from '../../components/SockerProvider';
import { SOCKET_MESSAGE } from '../../constants/socket';

const useMemes = () => {
  const { data = [], isLoading } = useQuery(QUERY_KEY.MEMES, () => new Promise((res) => socketIO.on(SOCKET_MESSAGE.FETCH_MEMES, (memesRaw: MemeRaw[]) => {
    const memes = (memesRaw ?? []).map<Meme>((meme) => {
      const size = 'M' || meme.distance;
      return ({
        id: meme.memeId,
        owner: meme.nickname,
        ownerId: meme.creator,
        updatorId: meme.updater,
        createdTime: meme.createdTs,
        updatedTime: meme.updatedTs,
        ownerProfileURL: meme.profileImg,
        size,
        imageURL: meme.imgUrl,
        text: meme.message,
        stickers: meme.stickers,
      });
    });
    res(memes);
  })));

  return {
    memes: data as Meme[],
    isLoading,
  }
};

export default useMemes;