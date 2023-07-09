import styled from "styled-components";

export const MemeWrapper = styled.div`
  & > img {
    width: 100%;
  }
`;

export const MemeDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;

  font-size: 10px;
`;
