const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("error in city service");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const deleteCity = this.deleteCity(cityId);
      return deleteCity;
    } catch (error) {
      console.log("error in city service");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const update = this.cityRepository.updateCity(cityId, data);
    } catch (error) {
      console.log("error in city service");
      throw { error };
    }
  }

  async getCity() {
    try {
      const city = this.cityRepository.getCity();
      return city;
    } catch (error) {
      console.log("error in city service");
      throw { error };
    }
  }
}

module.exports = CityService;
