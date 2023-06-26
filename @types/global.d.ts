interface Position {
  x: number;
  y: number;
}

interface Meme {
  id: string;
  owner: string;
  ownerId: string;
  updatorId: string;
  ownerProfileURL?: string;
  size: 'S' | 'M' | 'L';
  imageURL?: string;
  text?: string;
  position?: Position;
  createdTime: number;
  updatedTime: number;
  stickers: Sticker[];
}

interface MemeRaw {
  creator: string;
  updater: string;
  createdTs: number;
  updatedTs: number;
  imgUrl: string;
  message: string;
  stickers: Sticker[],
  memeId: string;
  nickname: string;
  profileImg: string;
  distance: number;
};

interface Sticker {
  owner: 'string'; // user id
  type: 'heart' | 'smile' | 'like'; //변경 될 수 있음
  position: Position;
}