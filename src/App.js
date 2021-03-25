import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LikedPage from "./Pages/LikedPage";
import BookmarkedPage from "./Pages/BookmarkedPage";
import DetailPage from "./Pages/DetailPage";

const linkStyle = {
  color: "white",
};

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul class="nav-ul">
            <div class="nav-flex-left">
              <li class="nav-li">
                <Link to="/" style={linkStyle}>
                  <a>HOME</a>
                </Link>
              </li>
            </div>
            <div class="nav-flex-right">
              <li class="nav-li">
                <Link to="/likedPage" style={linkStyle}>
                  LIKE
                </Link>
              </li>
              <li class="nav-li">
                <Link to="/bookmarkedPage" style={linkStyle}>
                  BOOKMARK
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/likedPage">
            <LikedPage />
          </Route>
          <Route path="/bookmarkedPage">
            <BookmarkedPage />
          </Route>
          <Route path="/detailPage/:id" component={DetailPage} />
        </Switch>

        <footer>
          <h3>© 2021 RIZKY NURFAIZI WIDYANTO</h3>
        </footer>
      </div>
    </Router>
  );
}

export default App;
