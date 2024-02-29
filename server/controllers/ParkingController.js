const parkings = require("../parkings.json");

function index(req, res, next) {
  res.status(200).json(parkings);
}

function create(req, res) {
  park = {
    id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    city: req.body.city,
  };
  parkings.push(park);
  res.status(200).json(parkings);
}

function show(req, res) {
  const { id } = req.params;
  park = parkings.filter((p) => p.id == id);
  res.status(200).json(park);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  park = parkings.find((p) => p.id == id);
  park.name = req.body.name;
  park.type = req.body.type;
  park.city = req.body.city;
  parkings[parkings.indexOf(park)] = park;
  res.status(200).json(parkings);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  park = parkings.find((p) => p.id == id);
  parkings.splice(parkings.indexOf(park), 1);
  res.status(200).json(parkings);
}

module.exports = { index, create, show, update, destroy };
