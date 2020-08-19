
// Cargamos el módulo de mongoose
const mongoose =  require('mongoose');
// Usaremos los esquemas

// Creamos el objeto del esquema y sus atributos
const Satisfaccion = mongoose.model('satisfaccion',{
    nombre: String,
    apellido: String,
    dependencia: String,
    satisfaccion: String
})

// Exportamos el modelo para usarlo en otros ficheros
module.exports = Satisfaccion