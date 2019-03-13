const { Post, Response } = require("../model/index");

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
    const { response, availability, postId, date, time } = req.body;

    let newResponse = new Response({ response, availability, postId });
    newResponse.save().then(() => {
      console.log("saved");
      res.redirect(`/post/` + postId);
    });
  },
  show: function(req, res) {
    let postId = req.params.id;
    Post.findOne({ _id: postId }).then(post => {
      res.render("response/response", { post });
    });
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
