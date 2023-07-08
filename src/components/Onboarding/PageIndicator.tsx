import styled from "styled-components";

interface PageIndicatorProps {
  pageNumber: number;
}

function PageIndicator({ pageNumber }: PageIndicatorProps) {
  return (
    <Dots>
      {[0, 1, 2].map((item) => {
        return (
          <Dot key={item} className={pageNumber === item ? "active" : ""} />
        );
      })}
    </Dots>
  );
}

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d9d9d9;

  &.active {
    background-color: #1d1d1d;
  }
`;

export default PageIndicator;
