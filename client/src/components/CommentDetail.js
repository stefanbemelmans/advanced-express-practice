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
<<<<<<< HEAD
    getComment(userId);
=======
    this.props.getComment(userId);
    console.log(this.props);
 
>>>>>>> origin/master

  }
  
  render() {
    const comment = this.props.comment;
    
    return (
      <div className="comment">

        <h3>{comment}</h3>
      </div>
    );
  }


}
