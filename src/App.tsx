import { RecoilRoot } from "recoil";

import ServiceRouter from "./router";
import Loading from "./components/Loading";

function App() {
  return (
    <RecoilRoot>
      <ServiceRouter />
      {/* <Loading message={"temp"} /> */}
    </RecoilRoot>
  );
}

export default App;
