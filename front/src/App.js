import "./App.css";

import HeaderContainer from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfileContainer from "./containers/profile/Profile";
import AddPostContainer from "./containers/addPost/AddPost";
import PostListContainer from "./containers/posts/PostsList";
import UsersContainer from "./containers/users/Users";
import ErrorBoundary from "./components/ErrorBoundary";
import authContext from "./authContext";
import { useState } from "react";
import AuthContainer from "./containers/auth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GuestRoute from "./components/auth/GuestRoute";

function App() {
  const [userData, setUserData] = useState({
    authenticated: false,
    user: null,
    setUserData: () => {},
  });
  const inc = () => {
    setUserData({ authenticated: true, user: { id: 1 }, setUserData });
  };
  return (
    <div className="App">
      <ErrorBoundary>
        <authContext.Provider value={userData}>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/"
                  element={
                    <div>
                      <HeaderContainer />
                      <PostListContainer />
                    </div>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <div>
                      <HeaderContainer />
                      <UserProfileContainer />
                    </div>
                  }
                />
                <Route
                  path="/home"
                  element={
                    <div>
                      <button onClick={inc}>Click me UP!</button>
                    </div>
                  }
                />
                <Route
                  path="/add-article"
                  element={
                    <div>
                      <HeaderContainer />
                      <AddPostContainer />
                    </div>
                  }
                />
                <Route
                  path="/articles"
                  element={
                    <div>
                      <HeaderContainer />
                      <PostListContainer />
                    </div>
                  }
                />
                <Route path="/users" element={<UsersContainer />} />
              </Route>
              <Route element={<GuestRoute />}>
                <Route path="/login" element={<AuthContainer />} />
              </Route>
              <Route
                path="*"
                element={
                  <main>
                    <p>URL is incorrect (no matches)</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </authContext.Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
