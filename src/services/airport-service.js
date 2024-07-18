const CrudService = require("./crud-service");

const { AirportRepository } = require("../repository/index");

class AirportService extends CrudService {
  constructor() {
    const airportrepo = new AirportRepository();
    super(airportrepo);
  }
}

module.exports = AirportService;
