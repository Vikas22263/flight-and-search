const { CityService } = require("../services/index");

const Cityservice = new CityService();

const create = async (req, res) => {
  try {
    const city = await Cityservice.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "created",
    });
  } catch (error) {
    console.log(error);
    throw { error };
  }
};
const getcity = async (req, res) => {
  try {
    const city = await Cityservice.getCity();
    return res.status(201).json({
      data: city,
      success: true,
      message: "created",
    });
  } catch (error) {
    console.log(error);
    throw { error };
  }
};
const destroy = async (req, res) => {
  try {
    const city = await Cityservice.deleteCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    console.log(error);
    throw { error };
  }
};
const update = async (req, res) => {
  try {
    const city = await Cityservice.updateCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "created",
    });
  } catch (error) {
    console.log(error);
    throw { error };
  }
};
const getAllcity=async(req,res)=>{
try {
  const getallcities=await Cityservice.getAllcities(req.params)
  return getallcities
} catch (error) {
  console.log(error);
  throw { error };
}
}
module.exports.Citycontrollers = {
  create,
  update,
  getcity, 
  destroy,
  getAllcity
};
