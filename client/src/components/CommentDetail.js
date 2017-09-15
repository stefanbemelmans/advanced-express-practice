import React, {Component} from "react";


export default class CommentDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   comment: ""
    // };
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getComment(userId);
    console.log(this.props.comment);
 

  }
  
  render() {
    console.log(this.props);
    const comment = this.props.comment.body;

    
    return (
      <div className="comment">

        <h3>{comment}</h3>
      </div>
    );
  }


}
