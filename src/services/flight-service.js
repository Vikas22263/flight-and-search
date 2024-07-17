const { FlightRepository, AirplaneRepository } = require("../repository/index");
import compareTime from "../utils/helper";
class FlightService {
  constructor() {
    this.airplanerepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (compareTime(data.arrivalTime.data.deapartureTime)) {
        throw { err: "arrival time must we grater then Departure time" };
      }
      const airplane = await this.airplanerepository.getAiplane(
        data.airplaneId
      );
      const createFlight = await this.flightRepository.createFlights({
        ...data,
        totalseat: airplane?.capacity,
      });
      return createFlight;
    } catch (error) {
      console.log("error in flilght service");
    }
  }

  async getFight(id) {
    try {
      const flight = this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("error in flilght service");
      throw { error };
    }
  }
  async getAllfight(data) {
    try {
      const allflight = this.flightRepository.getAllFlight(data);
      return allflight;
    } catch (error) {
      console.log("error in flilght service");
      throw { error };
    }
  }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 * airplaneId,
 * departureAirpostId,
 * arrivalTime,
 * deapartureTime,
 * price,
 * totalseat -> airplane
 * }
 */
