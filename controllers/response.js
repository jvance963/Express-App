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
    // Response.findById(req.params._id).then(response => {
    //   res.redirect("post/show", { response });
    // });

    res.render("post/response");
  },

  // May need to come back to this code later
  update: (req, res) => {
    let { content } = req.body;
    Response.findOne({ _id: req.params.id }).then(response => {
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
