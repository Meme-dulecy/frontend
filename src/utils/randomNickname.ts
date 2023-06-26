import { getRandomNickname } from "@woowa-babble/random-nickname";

export const createRandomNickname = () => {
  const randomNickname: string = getRandomNickname("animals");
  return randomNickname;
};
