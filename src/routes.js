import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Landing from "./pages/ladning/landing";
import SignUp from "./pages/signUp/signUp";
import Empty from "./pages/empty/empty";
import Posts from "./pages/posts/posts";
import SelectedPost from "./pages/selectedPost/selectedPost";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import ActivateUser from "./pages/activateUser/activateUser";
import {Navigate} from "react-router";
import SignIn from "./pages/signIn/signIn";

// user/settings/personalInfo
// / => Landing
// /singUp => SignUp
// /singUp/admin
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={ <Navigate to={ROUTES.posts} replace />} />
      <Route path={ROUTES.signUp} element={<SignUp />} />
      <Route path={ROUTES.signIn} element={<SignIn />} />

      {/*<Route path={`${ROUTES.posts}/:postId/user/:userId`} element={<SignUp />} />*/}

      <Route path={ROUTES.posts}>
        <Route index element={<ProtectedRoute><Posts /></ProtectedRoute>} />
        <Route path={':postId'} element={<SelectedPost />} />
      </Route>

      <Route path={`${ROUTES.activate}/:uid/:token`} element={<ActivateUser />} />

      <Route path="*" element={<Empty />} />
    </Routes>
  )
}

export default RoutesComponent;
