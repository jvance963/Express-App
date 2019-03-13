const { Post } = require("../model/index");

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
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  edit: function(req, res) {
    Post.findById(req.params.id).then(post => {
      // console.log(post);

      res.render("post/edit", { post });
    });
  },
  update: function(req, res) {
    // console.log(req.body);

    const editPost = ({
      name,
      description
      // status,
      // priority,
      // instructions
    } = req.body);

    // console.log(req.params.id);

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
