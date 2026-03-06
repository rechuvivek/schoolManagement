const db = require("../config/db");
const getDistance = require("../utils/distance");

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "Some fields are missing",
    });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({
      message: "Lat and Long should be correct",
    });
  }

  const query =
    "insert into schools (name,address,latitude,longitude) values (?,?,?,?)";

  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    res.status(201).json({
      message: "school added...",
      schoolId: result.insertId,
    });
  });
};

exports.listSchools = (req, res) => {
  // console.log(req.query)
  let { latitude, longitude } = req.query;

  latitude = parseFloat(latitude);
  longitude = parseFloat(longitude);

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({
      message: "Please enter valid lat and long...",
    });
  }

  db.query("select * from schools", (err, schools) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    const sortedSchools = schools
      .map((school) => {
        const distance = getDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude,
        );

        return {
          ...school,
          distance,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};
