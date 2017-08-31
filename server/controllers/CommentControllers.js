import CommentModel from "../models/commentModel";

export function list(request, response) {
  CommentModel.find({}).exec().then(
      comments => {
        return response.json(comments);
      }
    );
  }

export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  const comment = new CommentModel({
    body: request.body
  });
  comment.save()
  .then(comment => {return response.json(comment);});
  
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
