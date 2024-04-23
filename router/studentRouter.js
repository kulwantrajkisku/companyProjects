const express = require('express');
const router = express.Router();

const { saveStudentDetails } = require("../controller/studentC");

router.post("/saveDetails", saveStudentDetails);

module.exports = router;