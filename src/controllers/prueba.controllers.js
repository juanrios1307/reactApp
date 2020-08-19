const PruebaCtrl={}
const Empleado=require('../models/prueba.model')
const Pets=require('../models/Pets')
const Satisfaccion=require('../models/Satisfaccion')

PruebaCtrl.obtener=async(req,res)=>{

    const result = await Satisfaccion.find({}).exec()
    res.send(result)

}

PruebaCtrl.crear= async (req,res)=>{
    const {nombre,apellido,dependencia,satisfaccion} =req.body //atributos

    const registro=new Satisfaccion({
        nombre,
        apellido,
        dependencia,
        satisfaccion
    })
    await  registro.save()

    res.json({
        mensaje:"Registro guardado"
    })


}

PruebaCtrl.actualizar=(req,res)=>{
    res.send('funcionando put')
}

PruebaCtrl.eliminar=(req,res)=>{
    res.send('funcionando delete')
}

module.exports=PruebaCtrl