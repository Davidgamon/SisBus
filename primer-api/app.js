/* require es una funcion que busca las librerias 
de tu pc y las guarda en la variable express */
var express = require("express");
//volvemos express una funcion para invocarlo mendiante
//la variable aplicacion
var aplicacion = express()

aplicacion.get("/", (req, res) =>
{
  res.send("index pagina");  
});

//respuesta a la peticion del lector IoT
var saldo = 10;
aplicacion.get("/lectorIoT/:TID/:Monto/:Operacion", (req, res) =>
{
    const monto = parseInt(req.params.Monto);
    const op = req.params.Operacion
 
    if (op == "+")
    {
        saldo= saldo + monto;
        res.json({"saldo": saldo});
    }
    else if (op == "-")
    {
        saldo= saldo - monto;
        console.log("voy a restar");
        res.json({"saldo": saldo});
    }
    else
    {
        res.status(404);
        res.json({"error":"operacion no valida"});
        return
    }
    res.send("peticion GEt");  
});

aplicacion.post("/", (req, res) =>
{
  res.send("Post guardado");  
});

aplicacion.put("/", (req, res) =>
{
  res.send("Put actualizando");  
});

aplicacion.delete("/", (req, res) =>
{
  res.send("Delete eliminando");  
});

aplicacion.listen(3000, () => 
{
    console.log("servidor en el puerto 3000");
});

