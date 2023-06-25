import { RecoilRoot } from 'recoil';
import './App.css';
import ServiceRouter from './router';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ServiceRouter />
      </div>
    </RecoilRoot>
  );
}

export default App;
