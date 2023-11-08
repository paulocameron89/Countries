const postActivitiesHandler = (req,res)=>{
    const {name, countrie} = req.body
    res.status(200).send(`Crea una actividad ${name} para el pais ${countrie}`);
}

const getActivitiesHandler = (req,res)=>{
    res.status(200).send("Arreglo de actividades turisticas")
}

module.exports = {
    postActivitiesHandler,
    getActivitiesHandler,
}