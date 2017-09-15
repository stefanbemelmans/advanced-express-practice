import { connect } from "react-redux";
import Comment from "../components/CommentDetail";
import {getComment} from "../actions";

function mapStateToProps(state) {
  return {
    comment: state.getCommentDone
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getComment(id) {
      const action = getComment(id);
      dispatch(action);
    }
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Comment);
