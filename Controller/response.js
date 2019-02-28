const { Response } = require("../model/response");

module.exports = {
  new: function(req, res) {
    res.render("response/new");
  },
  create: function(req, res) {
    const { name, priority, status } = req.body;
    Response.create({
      name,
      priority,
      status
    }).then(response => {
      res.redirect(`/post/${response._id}`);
    });
  },
  show: function(req, res) {
    response.findById(req.params.id).then(response => {
      res.redirect("post/show", { response });
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
        res.redirect(`/post/${post._id}`);
      });
    });
  }
};
