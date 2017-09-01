import vehicleModel from "../models/vehicleModel";

export function list(request, response) {
  vehicleModel.find({}).exec().then(
    vehicles => {
      return response.json(vehicles);
    }
  );
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
  const vehicle = new vehicleModel({
    model: request.body.model,
    year: request.body.year,
    make: request.body.make
  });
  vehicle.save()
    .then(vehicle => { 
      return response.json(vehicle);
    });
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
