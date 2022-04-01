import React from "react";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  library.add(faSearch);
  return (
    <Router>
      <div>
        {<Nav />}
        <Switch>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" exact component={UserList} />
          {<Route path="/users/:login" component={UserDetail} />}
        </Switch>
        {<Footer />}
      </div>
    </Router>
  );
}

export default App;
