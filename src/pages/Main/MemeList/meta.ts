import { MEME_WIDTH_BY_SIZE } from "../../../constants";

export const byCreatedTime = (a: Meme, b: Meme) =>
  b.createdTime - a.createdTime;

export const formatMemes = (
  memes: Meme[],
  memeElements: Element[],
  containerWidth: number
) => {
  const memesWithElements = memes.map((meme, i) => ({
    ...meme,
    element: memeElements[i],
  }));

  return memesWithElements.sort(byCreatedTime).map((meme, _, memes) => ({
    ...meme,
    position: findPosition(meme, memes, containerWidth),
  }));
};

type MemeWithElement = Meme & { element: Element };

export const findPosition = (
  target: MemeWithElement,
  memes: MemeWithElement[],
  containerWidth: number
): Position => {
  const x = arrangeXCoordinate(
    target.createdTime % containerWidth,
    MEME_WIDTH_BY_SIZE[target.size],
    containerWidth,
    memes
  );

  const y = arrangeYCoordinate(target);

  return { x, y };
};

const RETRY_COUNT_LIMIT = 5;

const arrangeXCoordinate = (
  left: number,
  width: number,
  max: number,
  memes: Meme[],
  retryCount = 0
): number => {
  const right = left + width;

  const isOverlappedWithOthers = memes.some(({ position, size }) => {
    if (!position) return false;

    const memeRight = position.x + MEME_WIDTH_BY_SIZE[size];

    return left < memeRight && right > position.x;
  });

  const isOutOfRange = right > max;
  const needToArrage = isOverlappedWithOthers || isOutOfRange;

  if (needToArrage && retryCount < RETRY_COUNT_LIMIT) {
    const halfLeft = Math.floor(left / 2);
    const jumpSize = halfLeft === 0 ? width : halfLeft;
    const leftToRetry = isOutOfRange ? left + jumpSize : jumpSize;

    return arrangeXCoordinate(leftToRetry, width, max, memes, retryCount + 1);
  }

  return left;
};

const SEC = 1000;
const PX_PER_UNIT_TIME = 1;

const arrangeYCoordinate = (target: MemeWithElement) => {
  const currentTime = new Date().getTime();

  const yToTime =
    Math.floor((currentTime - target.createdTime) / SEC) * PX_PER_UNIT_TIME;

  if (target.element) return yToTime;

  return 0;
};
