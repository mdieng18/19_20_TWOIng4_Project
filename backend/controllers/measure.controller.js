const Measure = require('../models/measure.model.js');

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.type) {
    return res.status(400).send({
      message: "type can not be empty"
    });
  }

  // Create a new Measure
  const measure = new Measure({
    type: req.body.type,
    creationDate: req.body.creationDate,
    sensorId: req.body.sensorId,
    value: req.body.value
  });

  // Save User in the database
  measure
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly user integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new user in database we send an
      // appropriate message
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Measure."
      });
    });
};

// Retrieve and return all measures by type
exports.findAll = (req, res) => {
  Measure.find({ type: req.params.type })
    .then(measures => {
      res.send(measures);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving measures."
      });
    });
};

// Find a single Measure with a MeasureId
exports.findOne = (req, res) => {
  Measure.findById(req.params.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: "Measure not found with id " + req.params.measureId
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Measure not found with id " + req.params.measureId
        });
      }
      return res.status(500).send({
        message: "Error retrieving measure with id " + req.params.measureId
      });
    });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.type) {
    return res.status(400).send({
      message: 'type can not be empty'
    });
  }

  // Find measure and update it with the request body
  Measure.findByIdAndUpdate(
    req.params.measureId,
    {
      type: req.body.type,
      creationDate: req.body.creationDate,
      value:req.body.value
    },
    { new: true }
  )
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      res.send(measure);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Error updating measure with id ' + req.params.measureId
      });
    });
};

// Delete a Measure with the specified MeasureId in the request
exports.delete = (req, res) => {
  Measure.findByIdAndRemove(req.params.measureId)
    .then(measure => {
      if (!measure) {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      res.send({ message: 'Measure deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Measure not found with id ' + req.params.measureId
        });
      }
      return res.status(500).send({
        message: 'Could not delete measure with id ' + req.params.measureId
      });
    });
};
