const axios = require("axios");

exports.getAQI = async (req, res) => {
  const city = req.query.city;

  const response = await axios.get(
    `https://api.waqi.info/feed/${city}/?token=${process.env.AQI_API_KEY}`
  );

  res.json(response.data.data);
};