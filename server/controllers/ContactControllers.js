// import contacts from "../contacts";
import ContactModel from "../models/contactModel";

export function list(request, response) {
  ContactModel.find({}).exec().then(
    contacts => {
      return response.json(contacts);
    }
  );
}
export function show(request, response) {
  return response.json({theId: request.params.theId});
}
export function create(request, response) {
<<<<<<< HEAD
  contacts.push(request.body);
  const name = request.body.name;
  const occupation = request.body.occupation;
  const avatar = request.body.avatar;
=======
  const contact = new ContactModel({
    firstName: request.body.firstName,
    // lastName: request.body.lastName,
    occupation: request.body.occupation,
    avatar: request.body.avatar,
    // address: request.body.address,
    // phone: request.body.phone
  });
  contact.save()
  .then(contact => { 
    return response.json(contact);
  });
  
>>>>>>> origin/master
  
}
export function update(request, response) {
  return response.json({theId: request.params.theId});
}
export function remove(request, response) {
  return response.json({});
}
