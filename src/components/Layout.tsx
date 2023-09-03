import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function Layout() {
  return (
    <FullScreen>
      <StyledLayout>
        <Outlet />
      </StyledLayout>
    </FullScreen>
  );
}

const FullScreen = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLayout = styled.div`
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  width: 375px;

  background-color: #fff;
  border-left: 1px solid rgba(180, 180, 180, 0.2);
  border-right: 1px solid rgba(180, 180, 180, 0.2);
`;
