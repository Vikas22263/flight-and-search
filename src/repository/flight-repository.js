const { flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    const filterobj = {};
    if (data.arrivalAirportId) {
      filterobj.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filterobj.departureAirportId = data.departureAirportId;
    }

    //object approch
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filterobj, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.minPrice } },
    //       { price: { [Op.gte]: data.maxPrice } },
    //     ],
    //   });
    // }
    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filterobj, {
      //   price: { [Op.lte]: data.minPrice },
      // });
      priceFilter.push({ price: { [Op.lte]: data.minPrice } });
    }
    if (data.maxPrice) {
      // Object.assign(filterobj, {
      //   price: { [Op.gte]: data.maxPrice },
      // });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });
    return filterobj;
  }

  async createFlights(data) {
    try {
      const flight = flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something Went Wrong in Flight Repo");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something Went Wrong in Flight Repo");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const flightobject = this.#createFilter(filter);
      const flight = flights.findAll({
        where: flightobject,
      });
      return flight;
    } catch (error) {
      console.log("Something Went Wrong in Flight Repo");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

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
