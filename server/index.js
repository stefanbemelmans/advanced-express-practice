import express from "express";
import bodyParser from "body-parser";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";
import ContactRoutes from "./routes/ContactRoutes";
import CommentRoutes from "./routes/CommentRoutes";
const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(CommentRoutes);


app.get("/", function (request, response){
  return response.json({hello: "world"});
});

const port = process.env.PORT || 3001;

app.post("/",function (request, response) {
  return response.json({hello: "post world"});
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

