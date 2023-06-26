import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import Main from '../pages/Main';
import MemeDetail from '../pages/MemeDetails';

const ServiceRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={} />
        <Route path="/meme" element={} />
        <Route path="/user" element={} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<MemeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ServiceRouter;
