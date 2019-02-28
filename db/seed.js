const { Post } = require("../model/index");

// Always start by deleting everything
Post.remove({}).then(function() {
  // Then create "seed" items

  // these seed items provide data for your database to test and ensure everything is working properly
  Post.create({
    name: "Carpentry Job",
    description: "Build a cabinet",
    status: "Incomplete",
    priority: 2
  });

  Post.create({
    name: "Maid Service",
    description: "Cleaning houses",
    status: "Incomplete",
    priority: 3
  });

  Post.create({
    name: "Mount television",
    description: "handyman hang 70 inch tv",
    status: "Complete",
    priority: 5
  });
});
