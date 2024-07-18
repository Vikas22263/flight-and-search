

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const create = this.model.create(data);
      return create;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw { error };
    }
  }
  async destroy(id) {
    try {
      await this.model.destroy({
        where: {
          id: id,
        },
      });

      return true;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw { error };
    }
  }
  async get(id) {
    try {
      const result = await this.model.findByPk(id);
      return result;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw { error };
    }
  }
  async getall() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw { error };
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log("something went wrong in crud repo");
      throw { error };
    }
  }
}

module.exports = CrudRepository;
