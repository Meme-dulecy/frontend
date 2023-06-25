import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: height 3s linear;
  &.init {
    transition: none;
    [data-ref="meme"] {
      transition: none;
    }
  }
`;
