import React, {Component} from "react";
import {getComment} from "../actions";

export default class CommentDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   comment: ""
    // };
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
<<<<<<< HEAD
   getComment(userId);
=======
    this.props.comment = getComment(userId);
>>>>>>> 8c2ba3bed7ee9395b8216eba7afbf151f161ad89

  }
  
  render() {
    const comment = this.props.comment.body;
    return (
      <div className="comment">
      <h3>{comment}</h3>
      </div>
    );
  }


}
