import { MEME_WIDTH_BY_SIZE } from "./../../constants/index";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "../../constants/query";
import { socketIO } from "../../components/SockerProvider";
import { SOCKET_MESSAGE } from "../../constants/socket";
import { sortBy } from "lodash";

const useMemes = () => {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useQuery(
    QUERY_KEY.MEMES,
    () =>
      new Promise((resolve) =>
        socketIO.on(SOCKET_MESSAGE.FETCH_MEMES, (memesRaw: MemeRaw[]) => {
          const memes = (memesRaw ?? []).map<Meme>((meme) => {
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
          });

          resolve(memes);
        })
      ),
    {
      select(data) {
        return sortBy(data, (meme) => meme.createdTime);
      },
    }
  );

  return {
    memes: data as Meme[],
    isLoading,
    isFetching,
  };
};

export default useMemes;
