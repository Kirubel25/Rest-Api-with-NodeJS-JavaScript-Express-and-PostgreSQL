const { Router } = require("express");
const controller = require("./contoller");
const router = Router();

// route to get all student data
router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentById);
router.post("/", controller.createStudent);
router.delete("/:id", controller.deleteStudents);
router.put("/:id", controller.updateStudent);

module.exports = router;
