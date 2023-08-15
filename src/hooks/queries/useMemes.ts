import { MEME_WIDTH_BY_SIZE } from "./../../constants/index";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "../../constants/query";
import { socketIO } from "../../components/SockerProvider";
import { SOCKET_MESSAGE } from "../../constants/socket";

const useMemes = () => {
  const { data = [], isLoading } = useQuery(
    QUERY_KEY.MEMES,
    () =>
      new Promise((res) =>
        socketIO.on(SOCKET_MESSAGE.FETCH_MEMES, (memeRaws: MemeRaw[][]) => {
          const memesTimeLine = (memeRaws ?? []).map<Meme[]>((memes) =>
            memes.map((meme) => {
              let size: keyof typeof MEME_WIDTH_BY_SIZE;

              if (meme.distance < 300) {
                size = "L";
              } else if (meme.distance < 1000) {
                size = "M";
              } else {
                size = "S";
              }

              return {
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
              };
            })
          );

          res(memesTimeLine);
        })
      )
  );

  return {
    memesTimeLine: data as Meme[][],
    isLoading,
  };
};

export default useMemes;
