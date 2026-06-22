const router = require("express").Router();

const { getCursos, createCurso, updateCurso, deleteCurso,getTopMatriculados } = require("../controllers/cursosController");
const authMiddleware = require("../controllers/middlewares/authMiddleware");
const cursoValidator = require("../controllers/middlewares/validators/cursoValidator");
const handleValidation = require("../controllers/middlewares/handleValidation");

router.get("/", getCursos);
router.post("/", cursoValidator, handleValidation, createCurso);
router.put("/:id", authMiddleware, cursoValidator, handleValidation, updateCurso);
router.delete("/:id", authMiddleware, deleteCurso);
router.get("/consultas/cursos/top-matriculados",getTopMatriculados); //Ejercicio 3


module.exports = router;