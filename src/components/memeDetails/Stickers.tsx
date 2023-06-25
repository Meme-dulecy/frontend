import React, { useState } from 'react'
import styled from 'styled-components';
import Sticker from "./Sticker";

const Stickers = () => {
  return (
    <Container>
      <Sticker src="/assets/stickers/monkey.svg" />
      <Sticker src="/assets/stickers/glasses.svg" />
      <Sticker src="/assets/stickers/heart.svg" />
      <Sticker src="/assets/stickers/laugh.svg" />
      <Sticker src="/assets/stickers/words.svg" />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 91px;
  background-color: #d9d9d9;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img:last-child {
    margin-right: 0px;
  }
`;

export default Stickers