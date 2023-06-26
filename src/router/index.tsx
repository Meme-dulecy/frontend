import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import Main from "../pages/Main";
import UserPage from "../pages/User";
import MemeDetail from '../pages/MemeDetails';
import MemeCreation from '../pages/MemeCreation';

const ServiceRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<UserPage />} />

        <Route path="/detail" element={<MemeDetail />} />
        <Route path="/create" element={<MemeCreation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ServiceRouter;
