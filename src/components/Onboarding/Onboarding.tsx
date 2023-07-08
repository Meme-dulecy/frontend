import styled from "styled-components";
import Page from "./Page";
import Button from "./Button";

function Onboarding() {
  return (
    <Container>
      <Pages>
        {/* <PageIndicator /> */}
        <Page
          image="/assets/images/main-screen.png"
          description="밈 구경해 주실거죠?"
        />
        <Page
          image="/assets/images/creation-screen.png"
          description="밈 만들어 주실거죠?"
        />
        <Page
          image="/assets/images/detail-screen.png"
          description="밈 봐주실거죠?"
          button={<Button />}
        />
      </Pages>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  z-index: 40; // TODO: 수정하기
  overflow: hidden;
`;

// 0: 1번, -100%: 2번, -200%: 3번
const Pages = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(-100%);
`;

export default Onboarding;
