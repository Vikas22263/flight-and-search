const { FlightService } = require("../services/index");

const flightservice = new FlightService();

const getFlight = async (req, res) => {
  try {
    const flight = await flightservice.getFight(req.params.id);

    return res.status(201).json({
      data: flight,
      success: true,
      message: "flight fetch succesfuly",
    });
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

const flight = async (req, res) => {
    try {
      const flight = await flightservice.getAllFight(req.params);
  
      return res.status(201).json({
        data: flight,
        success: true,
        message: "flights fetch succesfuly",
      });
    } catch (error) {
      console.log(error);
      throw { error };
    }
  };
  const  create = async (req, res) => {
    try {
      const flight = await flightservice.createFlight(req.body);
  
      return res.status(201).json({
        data: flight,
        success: true,
        message: "flights created succesfuly",
      });
    } catch (error) {
      console.log(error);
      throw { error };
    }
  };

module.exports.FlightController = {
  getFlight,
  flight,
  create
};
