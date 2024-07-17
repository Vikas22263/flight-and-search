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
