import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import CommentDetailContainer from "./containers/CommentDetailContainer";
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
          <Main />
          <Switch>
<<<<<<< HEAD
            <Route path="/comment/:id" component={CommentDetail} />
=======
            <Route path="/comment/:id" component={CommentDetailContainer} />
>>>>>>> origin/master
            {/* <Route path="/comments/:theId" component={CommentDetail} />
        <Route path="/comments/:theId" component={CommentDetail} />
        <Route path="/comments/:theId" component={CommentDetail} />
        <Route path="/comments/:theId" component={CommentDetail} />
      */}
            {/* <Route path="/" component={Main} /> */}
          </Switch>
        </div>
      </BrowserRouter>
      
      
      
    );
  }
}
export default (App);


