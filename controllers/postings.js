const Postings = require("../models/postings");

var PostingsController = {
  getPostings: function(req, res) {
    Postings.findOne({ _id: req.params.id }).exec(function(err, postings) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(postings);
      }
    });
  },
  createPostings: function(req, res) {
    var postings = new Postings(req.body);
    postings.save(function(err, postings) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(postings);
      }
    });
  },

  editPostings: function(req, res) {
    Postings.findOneAndUpdate({ _id: req.params.id }, req.body).exec(function(
      err,
      postings
    ) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.send(postings);
      }
    });
  },

  deletePostings: function(req, res) {
    Postings.remove({ _id: req.params.id }, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Posting deleted!");
        res.send();
      }
    });
  }
};

module.exports = PostingsController;
