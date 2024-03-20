import express from "express";
import {prime,even} from '../calculation/calculatio.js'
const route=express.Router();

route.get("/numbers/prime",prime)
route.get("/numbers/prime",even)

export default route;