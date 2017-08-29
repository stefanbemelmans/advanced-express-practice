import comments from "../comments";

export function list(request, response) {
  return response.json(comments);
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  comments.push(request.body);
  
  return response.json({body: request.body});
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
