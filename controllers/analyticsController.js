exports.getAnalytics = (req, res) => {
  res.json({
    temperatureTrend: [30, 32, 29, 31],
    aqiTrend: [120, 140, 110],
    pollutionTrend: [60, 55, 70],
    complaintStats: [5, 8, 3]
  });
};