const apiRouter = require("express").Router();
const v1 = require("./v1");

apiRouter.get("/", (req, res) => {
  res.send("HALO xixi");
});

apiRouter.use("/v1", v1);

module.exports = apiRouter;
