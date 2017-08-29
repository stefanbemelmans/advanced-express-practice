import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  return response.json({});
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
