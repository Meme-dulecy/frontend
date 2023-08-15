import { MEME_WIDTH_BY_SIZE } from "../../../constants";

export const getTimeDiffBetweenNowAnd = (createdTime: number) => {
  return (new Date().getTime() - createdTime) / 1000;
};

const RETRY_COUNT_LIMIT = 5;

export const getXCoord = (
  left: number,
  containerWidth: number,
  size: Meme["size"],
  memes: Meme[],
  retryCount = 0
): number => {
  const width = MEME_WIDTH_BY_SIZE[size];
  const right = left + width;

  const isOverlappedWithOthers = memes.some(({ position, size }) => {
    if (!position) return false;

    const memeRight = position.x + MEME_WIDTH_BY_SIZE[size];

    return left < memeRight && right > position.x;
  });

  const isOutOfRange = right > containerWidth;
  const needToArrage = isOverlappedWithOthers || isOutOfRange;

  if (needToArrage && retryCount < RETRY_COUNT_LIMIT) {
    const halfLeft = Math.floor(left / 2);
    const jumpSize = halfLeft === 0 ? width : halfLeft;
    const leftToRetry =
      right + jumpSize > containerWidth
        ? jumpSize
        : (left + jumpSize) % containerWidth;

    return getXCoord(leftToRetry, containerWidth, size, memes, retryCount + 1);
  }

  return left;
};
