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
    this.props.comment = getComment(userId);

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
