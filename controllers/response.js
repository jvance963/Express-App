var mongoose = require("mongoose");
var Response = mongoose.model("response");

var ResponseController = {
  getResponse: function(req, res) {
    Response.findOne({ _id: req.params.id }).exec(function(err, response) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(response);
      }
    });
  },
  createResponse: function(req, res) {
    var response = new Response(req.body);
    response.save(function(err, response) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(response);
      }
    });
  },

  deleteResponse: function(req, res) {
    Response.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Response deleted!");
        res.send();
      }
    });
  }
};

module.exports = ResponseController;
