import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ContactControllers";


router.get("/contacts", list);
router.get("/contacts/:id", show);
router.post("/contacts", create);
router.put("/contacts/:id", update);
router.delete("/contacts/:id", remove);

export default router;
