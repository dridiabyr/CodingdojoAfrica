const productControlle = require('../controllers/person.controller');

module.exports= function(app){
    app.get("/api", productControlle.getAllProducts);
    app.get("/api/getbyId" , productControlle.getproductById)
    app.post("/api/createproduct", productControlle.createproduct);
    app.patch("/api/updateJokes", productControlle.updateProduct);
    app.delete("/api/deleteJokes", productControlle.deleteProduct);
}