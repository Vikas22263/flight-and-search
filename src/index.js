const express = require("express");
const { PORT } = require("./config/serverconfig");
const ApiRoutes = require("./routes/index");

const setupandstartserver = async () => {
  const app = express();
  app.use(express.json());
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log("server is runing in port 3000");
  });
};

setupandstartserver();
 