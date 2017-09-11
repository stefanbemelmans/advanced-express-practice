import express from "express";
import bodyParser from "body-parser";

import ContactRoutes from "./routes/ContactRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import ProductRoutes from "./routes/ProductRoutes";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/test",
  {
    useMongoClient: true
  }
);


const app = express();
app.use(bodyParser.json());
// app.use(express.methodOverride());
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(VehicleRoutes);
app.use(ProductRoutes);


// app.get("/", function (request, response) {
//   return response.json({hello: "world"});
// });

const port = process.env.PORT || 3001;

// app.post("/",function (request, response) {
//   return response.json({hello: "post world"});
// });

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

