const axios = require("axios");

exports.getCityInfo = async (req, res) => {
  const city = req.query.city;

  const response = await axios.get(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
  );

  res.json(response.data);
};