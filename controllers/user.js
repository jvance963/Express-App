const User = require("../models/user");

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
    var User = new User(req.body);
    user.save(function(err, user) {
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

// module.exports = {
//   getUser: (req, res) => {
//     res.send("get user is working");
//   }
// };
