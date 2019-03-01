const { Post } = require("../model/index");

module.exports = {
  index: function(req, res) {
    Post.find({}).then(posts => {
      console.log(posts);
      res.render("post/index", { posts });
    });
  },
  new: function(req, res) {
    res.render("post/new");
  },
  create: function(req, res) {
    const { name, description, priority, status } = req.body;
    console.log(req.body);
    Post.create({
      name,
      description,
      priority,
      status
    }).then(post => {
      res.redirect(`/post/${post._id}`);
    });
  },
  show: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  edit: function(req, res) {
    post.findById(req.params.id).then(posts => {
      res.render("post/edit", { posts });
    });
  },
  update: function(req, res) {
    console.log(req.body);
    const { name, description, status, priority } = req.body;

    Post.findOneAndUpdate(
      req.params.id,
      {
        name,
        description,
        status,
        priority
      },
      {
        runValidators: true
      }
    )
      .then(post => {
        res.redirect(`/post/${post._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete: function(req, res) {
    Post.remove({ _id: req.params.id }).then(post => {
      console.log(post);
      res.redirect("/");
    });
  }
};
