const router = require("express").Router();
const {
    getProfesores,
    getProfesor,
    getEdad,
 
} = require("../controllers/profesoresController");
const authMiddleware = require("../controllers/middlewares/authMiddleware");
const handleValidation = require("../controllers/middlewares/handleValidation");
const profesorValidator = require("../controllers/middlewares/validators/profesorValidator");

router.get("/", getProfesores);
router.get("/:id", getProfesor);
router.get("/consultas/:edad",getEdad); //Ejercicio 1
module.exports = router;