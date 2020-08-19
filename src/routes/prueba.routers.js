const {Router}=require('express')
const route=Router()
const  PruebaCtrl=require('../controllers/prueba.controllers')

route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","https://pacific-mesa-58371.herokuapp.com/")
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

route.get('/',PruebaCtrl.obtener)
route.post('/',PruebaCtrl.crear)
route.put('/',PruebaCtrl.actualizar)
route.delete('/',PruebaCtrl.eliminar)


module.exports=route