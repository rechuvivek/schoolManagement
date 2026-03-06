function getDistance(lat1, lon1, lat2, lon2) {
    
  const radConv = (value) => (value * Math.PI) / 180;

  const R = 6371;

  const dLat = radConv(lat2 - lat1);
  const dLon = radConv(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(radConv(lat1)) *
      Math.cos(radConv(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

module.exports = getDistance;