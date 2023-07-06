import { useQuery } from '@tanstack/react-query';

export default function useMemeDetail(memeId: string) {
  const {
    data: {
      result: {
        imgUrl = undefined,
        message = undefined,
        nickname = undefined,
        profileImg = undefined,
        stickers = undefined,
      } = {},
    } = {},
    isLoading,
  } = useQuery(
    ['memeDetail'],
    async () => {
      return fetch(`${process.env.REACT_APP_SERVER_URI}/memes/${memeId}`, {
        method: 'GET',
      }).then((res) => res.json());
    },
    {
      enabled: !!memeId,
    }
  );

  return {
    imgUrl,
    message,
    nickname,
    profileImg,
    stickers,
    isLoading,
  };
}
