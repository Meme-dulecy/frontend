import React, { useState } from "react";
import styled from "styled-components";
import Page from "./Page";
import StartButton from "./StartButton";
import PageIndicator from "./PageIndicator";

interface TouchPosition {
  x: number;
  y: number;
}

function Onboarding() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  // TODO: 수정하기
  const [className, setClassName] = useState<string>("");
  const [touchPosition, setTouchPosition] = useState<TouchPosition>({
    x: 0,
    y: 0,
  });

  const handleNextPage = () => {
    if (pageNumber >= 2) return;
    setPageNumber((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber <= 0) return;
    setPageNumber((prev) => prev - 1);
  };

  const handleStartButtonClick = () => {
    localStorage.setItem("hasOnboarding", "true");
    setClassName("invisible");
  };

  const touchStart = (e: React.TouchEvent) => {
    setTouchPosition({
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY,
    });
  };

  const touchEnd = (e: React.TouchEvent) => {
    const distanceX = touchPosition.x - e.changedTouches[0].pageX;

    if (distanceX > 30) {
      handleNextPage();
    }

    if (distanceX < -30) {
      handlePrevPage();
    }
  };

  return (
    <Container className={className}>
      <PageIndicator pageNumber={pageNumber} />
      <Pages
        pagenumber={pageNumber}
        onClick={handleNextPage}
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <Page
          image="/assets/images/main-screen.png"
          description={`주변 100m 사람들의 생각을 \n 밈으로 확인해 보세요`}
        />
        <Page
          image="/assets/images/creation-screen.png"
          description={`내 생각을 밈으로 만들어 \n 주위에 뿌려보세요`}
        />
        <Page
          image="/assets/images/detail-screen.png"
          description={`밈을 더 자세히 보고 \n 스티커로 공감해 보세요`}
          button={
            <StartButton handleStartButtonClick={handleStartButtonClick} />
          }
        />
      </Pages>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  position: absolute;
  z-index: 40;
  overflow: hidden;

  &.invisible {
    display: none;
  }
`;

const Pages = styled.div<{ pagenumber: number }>`
  display: flex;
  width: 100%;
  transform: ${({ pagenumber }) => `translateX(-${pagenumber}00%)`};
  transition: all 300ms;
`;

export default Onboarding;
