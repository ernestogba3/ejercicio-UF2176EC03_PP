const router = require("express").Router();

const { getMatriculas, createMatricula, updateMatricula, deleteMatricula,getAlumnosCursos } = require("../controllers/matriculasController");
const authMiddleware = require("../controllers/middlewares/authMiddleware");
const matriculaValidator = require("../controllers/middlewares/validators/matriculaValidator");
const handleValidation = require("../controllers/middlewares/handleValidation");

router.get("/", getMatriculas);
router.get("/matriculasAlumnos",getAlumnosCursos);  //Ejercicio 4
router.post("/", matriculaValidator, handleValidation, createMatricula);
router.put("/:id", authMiddleware, matriculaValidator, handleValidation, updateMatricula);
router.delete("/:id", authMiddleware, deleteMatricula);

module.exports = router;