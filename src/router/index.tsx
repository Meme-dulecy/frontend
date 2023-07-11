import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import Main from "../pages/Main";
import UserPage from "../pages/User";
import MemeDetail from "../pages/MemeDetails";
import MemeCreation from "../pages/MemeCreation";
import Layout from "../components/Layout";
import LoginCallBack from "../pages/LoginCallback";

const ServiceRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/redirect" element={<LoginCallBack />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/detail" element={<MemeDetail />} />
          <Route path="/create" element={<MemeCreation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ServiceRouter;
