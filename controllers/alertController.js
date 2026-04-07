exports.getAlerts = (req, res) => {
  res.json([
    { city: "Delhi", alert: "Heavy rainfall warning" },
    { city: "Mumbai", alert: "High traffic congestion" }
  ]);
};
