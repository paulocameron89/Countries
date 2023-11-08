const { Router } = require("express");
const {getCoutriesHandler,getCountriesByIdHandler} = require("../handlers/countriesHandler");

const countriesRouter = Router();


countriesRouter.get("/", getCoutriesHandler);
countriesRouter.get("/:id", getCountriesByIdHandler);


module.exports = countriesRouter;

// el handler se encarga de recibir la request, unificar datos y devolver una respuesta. El handler invoca al controller porque nunca interactua con API u otras fuentes externas
// el controller es otra función que si interactúa con fuentes externas