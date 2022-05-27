import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import PostsOne from "../../components/PostsOne";
import { RouteAll } from "../../constants/constants";
import Post from "../AllPost/Posts";
import Posts from "../AllPost/Posts";
import Information from "../Information/Information";
import Login from "../Login";
import Registration from "../Registration";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Template from "../Template";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector } from "../../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={`/${RouteAll.AllCard}`} element={<Posts />} />
          <Route path={`/${RouteAll.Card}`} element={<PostsOne />} />
          <Route path={`/${RouteAll.Info}`} element={<Information />} />
          <Route path={`/${RouteAll.Card}`} element={<Post />} />
          <Route path={`/${RouteAll.Login}`} element={<Login />} />
          <Route path={`/${RouteAll.Template}`} element={<Template />} />
          <Route
            path={`/${RouteAll.Registration}`}
            element={<Registration />}
          />
          <Route
            path={`/${RouteAll.RegistrationConfirmation}`}
            element={<RegistrationConfirmation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
