import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import { RouteAll } from "../../constants/constants";
import Post from "../AllPost/Posts";
import Posts from "../AllPost/Posts";
import Information from "../Information/Information";
import Login from "../Login";
import Registration from "../Registration";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Template from "../Template";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={`/${RouteAll.AllCard}`} element={<Posts />} />
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

export default router;
