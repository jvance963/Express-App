const { Response } = require("../model/index");

module.exports = {
  index: function(req, res) {
    response.find({}).then(responses => {
      console.log(responses);
      res.render("response/index", { responses });
    });
  },
  new: function(req, res) {
    res.render("response/new");
  },

  //come back to this code....may have an easier way
  create: function(req, res) {
    const { response, availability, date, time } = req.body;
    Response.create({
      response,
      availability,
      date,
      time
    }).then(response => {
      res.redirect(`/response/${response._id}`);
    });
  },
  show: function(req, res) {
    response.findById(req.params.id).then(response => {
      res.redirect("response/show", { response });
    });
  },

  // May need to come back to this code later
  update: (req, res) => {
    let { content } = req.body;
    response.findOne({ _id: req.params.id }).then(response => {
      response.push({
        content,
        author: String
      });
      response.save(err => {
        res.redirect(`/response/${response._id}`);
      });
    });
  }
};
