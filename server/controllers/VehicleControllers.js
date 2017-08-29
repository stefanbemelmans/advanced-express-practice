import vehicles from "../vehicles";

export function list(request, response) {
  return response.json(vehicles);
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
