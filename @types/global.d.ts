interface Position {
  x: number;
  y: number;
}

interface Meme {
  id: string;
  owner: string;
  ownerProfileURL?: string;
  size: 'mini' | 'medium' | 'large';
  imageURL?: string;
  text?: string;
  position: Position;
  blur: number;
  stickers: Sticker[];
}

interface Sticker {
  owner: 'string'; // user id
  type: 'heart' | 'smile' | 'like'; //변경 될 수 있음
  position: Position;
}