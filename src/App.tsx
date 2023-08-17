import styled, { StyleSheetManager } from "styled-components";
import { RecoilRoot } from "recoil";
import ServiceRouter from "./router";

function App() {
  return (
    <RecoilRoot>
      <StyleSheetManager
        shouldForwardProp={(prop) => !["theme"].includes(prop)}
      >
        <Container>
          <ServiceRouter />
        </Container>
      </StyleSheetManager>
    </RecoilRoot>
  );
}

const Container = styled.div`
  background-color: #fff;
`;

export default App;
