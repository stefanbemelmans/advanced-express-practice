import productModel from "../models/productModel";

export function list(request, response) {
  productModel.find({}).exec().then(
    products => {
      return response.json(products);
    }
  );
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  const product = new productModel({
    name: request.body.name,
    description: request.body.description,
    
  });
  product.save()
    .then(product => { 
      return response.json(product);
    });
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
