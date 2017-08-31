import products from "../products";

export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  contacts.push(request.body);
  const name = request.body.name;
  const occupation = request.body.occupation;
  const avatar = request.body.avatar;
  
  return response.json({
    name,
    occupation,
    avatar
  });
}
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
