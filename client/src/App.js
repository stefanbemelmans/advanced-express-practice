import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import CommentDetail from "./components/CommentDetail";
// import Main from "./components/Main";
// import CommentDetail from "./components/CommentDetail";
class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Main />
          </div>
          <Switch>
            <Route path="/comments/:theId" component={CommentDetail} />
            {/* <Route path="/comments/:theId" component={CommentDetail} />
            <Route path="/comments/:theId" component={CommentDetail} />
            <Route path="/comments/:theId" component={CommentDetail} />
            <Route path="/comments/:theId" component={CommentDetail} />
          */}
            <Route path="/" component={Main} />
          
          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


