var mongoose = require("mongoose");
var User = mongoose.model("User");

var UserController = {
  getUser: function(req, res) {
    User.findOne({ email: req.params.email }).exec(function(err, user) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(user);
      }
    });
  },
  createUser: function(req, res) {
    var user = new User(req.body);
    User.save(function(err, user) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(user);
      }
    });
  },
  editUser: function(req, res) {
    User.findOneAndUpdate({ email: req.params.email }, req.body).exec(function(
      err,
      user
    ) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(user);
      }
    });
  },
  deleteUser: function(req, res) {
    User.remove({ email: req.params.email }, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Employee deleted!");
        res.send();
      }
    });
  }
};

module.exports = UserController;
