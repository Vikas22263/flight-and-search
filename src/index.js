const express = require("express");
const { PORT } = require("./config/serverconfig");
const ApiRoutes = require("./routes/index");

const { City } = require("./models/index");
const db = require("./models/index");

const setupandstartserver = async () => {
  const app = express();
  app.use(express.json());
  // db.sequelize.sync({ force: true });
  app.use("/api", ApiRoutes);
  const cities = await City.findOne({
    where: {
      id: 1,
    },
  });
  const ait = await cities.hasAirports({id:1});
  
  console.log(ait);
  app.listen(PORT, () => {
    console.log("server is runing in port 3000");
  });
};

setupandstartserver();
