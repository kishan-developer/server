import express from "express";
import { checkout } from "../controller/paymentcontroller.js";
import { paymentVarification } from "../controller/paymentcontroller.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentVarification").post(paymentVarification);

export default router;