import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Landing from "./pages/ladning/landing";
import SignUp from "./pages/signUp/signUp";
import Empty from "./pages/empty/empty";
import Posts from "./pages/posts/posts";

// user/settings/personalInfo
// / => Landing
// /singUp => SignUp
// /singUp/admin
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Landing />} />
      <Route path={ROUTES.signUp} element={<SignUp />} />
      <Route path={ROUTES.posts} element={<Posts />} />
      <Route path="*" element={<Empty />} />
    </Routes>
  )
}

export default RoutesComponent;