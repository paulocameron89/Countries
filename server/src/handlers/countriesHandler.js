const getCoutriesHandler = (req,res)=>{
    const {name} = req.query
    if (name) res.status(200).send(`Obtiene el país ${name}`);
    res.status(200).send("Todos los paises")
}

const getCountriesByIdHandler = (req,res)=>{
    const {id} = req.params
    res.status(200).send(`Obtiene el país ${id}`)
};



module.exports = {
    getCoutriesHandler,
    getCountriesByIdHandler,
}