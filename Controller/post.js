// const { Post } = require("../model/post");

// module.exports = {
//   new: function(req, res) {
//     res.render("post/new");
//   },
//   create: function(req, res) {
//     const { name, description, priority, status } = req.body;
//     Post.create({
//       name,
//       description,
//       priority,
//       status
//     }).then(post => {
//       res.redirect(`/post/${post._id}`);
//     });
//   },
//   show: function(req, res) {
//     Post.findById(req.params.id).then(post => {
//       res.render("post/show", { post });
//     });
//   },
//   edit: function(req, res) {
//     post.findById(req.params.id).then(post => {
//       res.render("post/edit", { post });
//     });
//   },

//   // May need to come back to this code later
//   update: (req, res) => {
//     let { content } = req.body;
//     Post.findOne({ _id: req.params.id }).then(post => {
//       post.response.push({
//         content,
//         author: req.user._id
//       });
//       post.save(err => {
//         res.redirect(`/post/${post._id}`);
//       });
//     });

//     Post.findOneAndUpdate(
//       req.params.id,
//       {
//         name,
//         description,
//         status,
//         priority
//       },
//       {
//         runValidators: true
//       }
//     )
//       .then(post => {
//         res.redirect(`/post/${post._id}`);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   },
//   delete: function(req, res) {
//     Post.remove({ _id: req.params.id }).then(post => {
//       console.log(post);
//       res.redirect("/");
//     });
//   }
// };
