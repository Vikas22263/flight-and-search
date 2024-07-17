const { flights } = require("../models/index");

class FlightRepository {
  async createFlights(data) {
    try {
      const flight = flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something Went Wrong in Flight Repo");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

