const { Post } = require("../model/index");

module.exports = {
  index: function(req, res) {
    Post.find({}).then(posts => {
      console.log(posts);
      res.render("index", { posts });
    });
  },
  new: function(req, res) {
    res.render("post/new");
  },
  create: function(req, res) {
    const { name, description, priority, status, instructions } = req.body;
    console.log(req.body);
    Post.create({
      name,
      description,
      priority,
      status,
      instructions
    }).then(post => {
      // need to take the ${post._id} out
      res.redirect("/post");
    });
  },
  show: function(req, res) {
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  edit: function(req, res) {
    Post.findById(req.params.id).then(posts => {
      res.render("post/edit", { posts });
    });
  },
  update: function(req, res) {
    console.log(req.body);
    const { name, description, status, priority, instructions } = req.body;

    Post.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        name,
        description,
        status,
        priority,
        instructions
      },
      {
        runValidators: true
      }
    )
      .then(post => {
        res.redirect(`/post`);
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete: function(req, res) {
    Post.remove({ _id: req.params.id }).then(post => {
      console.log(post);
      res.redirect("/post");
    });
  }
};
