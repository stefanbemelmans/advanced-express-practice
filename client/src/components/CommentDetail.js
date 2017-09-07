import React, {Component} from "react";

export default class CommentDetail extends Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
  let id = this.props.comment.id;
  this.props.getComment(id);
}

render(){
  let comment = this.props.comment.body;
  return(

    {comment}

  );
}


}
