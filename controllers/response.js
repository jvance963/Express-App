const { Response } = require("../model/index");

module.exports = {
  index: function(req, res) {
    response.find({}).then(responses => {
      console.log(responses);
      res.render("/index", { responses });
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
      res.redirect(`/response`);
    });
  },
  show: function(req, res) {
    res.render("response/response");
  },
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
