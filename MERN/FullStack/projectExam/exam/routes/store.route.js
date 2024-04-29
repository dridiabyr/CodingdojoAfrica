const StoreController = require("../controllers/store.controller");


module.exports = function (app) {
  app.get("/api", StoreController.getAllStores);
  app.get("/api/getbyId" , StoreController.getStoreById)
  app.post("/api/createstore",StoreController.createStore);
  app.patch("/api/updatestore", StoreController.updateStore);
  app.delete("/api/deletestore", StoreController.deleteStore);
};
