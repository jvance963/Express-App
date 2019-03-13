const { Post, Response } = require("../model/index");

module.exports = {
  index: function(req, res) {
    Post.find({}).then(posts => {
      res.render("index", { posts });
    });
  },
  new: function(req, res) {
    res.render("post/new");
  },
  create: function(req, res) {
    const { name, description, priority, status, instructions } = req.body;
    Post.create({
      name,
      description,
      priority,
      status,
      instructions
    }).then(post => {
      res.redirect(`/post`);
    });
  },
  show: function(req, res) {
    let postId = req.params.id;
    Post.findById(postId).then(post => {
      Response.find({ postId }).then(responses => {
        res.render("post/show", { post, responses });
      });
    });
  },
  edit: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/edit", { post });
    });
  },
  update: function(req, res) {
    const editPost = ({
      name,
      description
      // status,
      // priority,
      // instructions
    } = req.body);

    Post.findOneAndUpdate({ _id: req.params.id }, { $set: editPost }).then(
      () => {
        res.redirect("/post");
      }
    );
  },
  delete: function(req, res) {
    Post.deleteOne({ _id: req.params.id }).then(post => {
      res.redirect("/post");
    });
  }
};
