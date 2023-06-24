export const randomInt = (max: number, min = 0, numOfCase = 100) => {
  const random = Math.floor(Math.random() * numOfCase);
  const ranged = (random * (max - min)) + min;
  return ranged / numOfCase;
}