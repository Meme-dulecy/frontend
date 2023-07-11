import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;

  & > svg {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 24px;
  }
`;

export const UserInfoControl = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const Logout = styled.div`
  max-width: 400px;
  margin: 30px auto;
  padding: 12px;
  border-radius: 3px;
  background-color: #fee500;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;
