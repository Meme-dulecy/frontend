import { MEME_WIDTH_BY_SIZE } from '../../../constants';

export const byCreatedTime = (a: Meme, b: Meme) => b.createdTime - a.createdTime;

export const formatMemes = (memes: Meme[]) => {
  return memes.map((meme, _, memes) => {
    return {
      ...meme,
      position: findPosition(meme, memes),
    };
  });
};

const SCROLLBAR_WIDTH = 15;
export const findPosition = (target: Meme, memes: Meme[]): Position => {
  const viewportWidth = window.innerWidth === document.body.scrollWidth ? window.innerWidth : window.innerWidth - SCROLLBAR_WIDTH;
  const x = arrangeXCoordinate(target.createdTime % viewportWidth, MEME_WIDTH_BY_SIZE[target.size], viewportWidth, memes);
  const y = arrangeYCoordinate(target.createdTime, window.innerHeight, memes);
  return { x, y };
}

const RETRY_COUNT_LIMIT = 5;
const arrangeXCoordinate = (left: number, width: number, max: number, memes: Meme[], retryCount = 0): number => {
  const right = left + width;
  const overlapsViewportRight = right > max;
  const overlapsOthers = memes.some(({ position, size }) => 
    position
    && (left < position.x + MEME_WIDTH_BY_SIZE[size] || right > position.x)
  );

  const overlaps = overlapsOthers || overlapsViewportRight;
  if (overlaps && retryCount < RETRY_COUNT_LIMIT) {
    let jumpSize = Math.floor(left / 2);
    if (jumpSize === 0) jumpSize = width;

    let leftToRetry = left + jumpSize;
    if (overlapsViewportRight) {
      leftToRetry = jumpSize;
    }
    return arrangeXCoordinate(leftToRetry, width, max, memes, retryCount + 1);
  };
  return left;
};

const arrangeYCoordinate = (bottom: number, length: number, items: Meme[]) => {
  return bottom % length;
}

