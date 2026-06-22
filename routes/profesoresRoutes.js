const router = require("express").Router();
const {
    getProfesores,
    getProfesor,
    getEdad,
    getRango,
    findTopMatriculados,
 
} = require("../controllers/profesoresController");
const authMiddleware = require("../controllers/middlewares/authMiddleware");
const handleValidation = require("../controllers/middlewares/handleValidation");
const profesorValidator = require("../controllers/middlewares/validators/profesorValidator");
const { findByRango } = require("../models/Profesor");

router.get("/", getProfesores);
router.get("/consultas/:edad",getEdad); //Ejercicio 1
router.get("/consultas/profesores/rango",getRango); //Ejercicio 2

router.get("/:id", getProfesor);
module.exports = router;