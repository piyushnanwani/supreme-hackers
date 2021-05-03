const User = require('../models/user.model.js');
const userService = require('../services/user.service');

// Create and Save a new User
exports.create = (req, res) => {
   // Validate request
   if(!req.body) {
     console.log(req);
    return res.status(400).send({
        message: "User content can not be empty"
    });
}


// Create a User
const user = new User({

  username: req.body.username,
  name: req.body.name,
  profile_link: req.body.profile_link,
  location: req.body.location,
  education: req.body.education,
  challenges_solved: req.body.challenges_solved,
  solutions_submitted: req.body.solutions_submitted,
  solutions_accepted: req.body.solutions_accepted,
  overall_rank: req.body.overall_rank,
  followers: req.body.followers,
  following: req.body.following,
  data_structures_percentile: req.body.data_structures_percentile,
  algorithms_percentile: req.body.algorithms_percentile,
  cplusplus_percentile: req.body.cplusplus_percentile,
  java_percentile: req.body.java_percentile,
  python_percentile: req.body.python_percentile,
  html_percentile: req.body.html_percentile,
  javascript_percentile: req.body.javascript_percentile,
  data_structures_percentile: req.body.data_structures_percentile,
  num_of_votes: req.body.num_of_votes,
  device_type: req.body.device_type,
});

// Save User in the database
user.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
    });
});
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
  .then(users => {
      res.send(users);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
      });
  });
};

// // Find a single user with a Id (column of MongoDB)
// exports.findOne = (req, res) => {
//   User.findById(req.params.userId)
//   .then(user => {
//       if(!user) {
//           return res.status(404).send({
//               message: "User not found with id " + req.params.userId
//           });            
//       }
//       res.send(user);
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "User not found with id " + req.params.userId
//           });                
//       }
//       return res.status(500).send({
//           message: "Error retrieving user with id " + req.params.userId
//       });
//   });
// };

// Find user with given  userId 
exports.findUserWithusername = (req, res) => {
  User.findOne({username: req.params.username})
  // User.findById(req.params.username)
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with username " + req.params.username
          });            
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with username " + req.params.username
          });                
      }
      return res.status(500).send({
          message: "Error retrieving user with username " + req.params.username
      });
  });
};

// Incorrect , since we to update with username and not Id

// Update a user identified by the username in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
      return res.status(400).send({
          message: "User content can not be empty"
      });
  }

  // Find User and update it with the request body
  User.findOneAndUpdate(
    { username: req.params.username },
    {
      name: req.body.name,
      profile_link: req.body.profile_link,
      location: req.body.location,
      education: req.body.education,
      challenges_solved: req.body.challenges_solved,
      solutions_submitted: req.body.solutions_submitted,
      solutions_accepted: req.body.solutions_accepted,
      overall_rank: req.body.overall_rank,
      followers: req.body.followers,
      following: req.body.following,
      data_structures_percentile: req.body.data_structures_percentile,
      algorithms_percentile: req.body.algorithms_percentile,
      cplusplus_percentile: req.body.cplusplus_percentile,
      java_percentile: req.body.java_percentile,
      python_percentile: req.body.python_percentile,
      html_percentile: req.body.html_percentile,
      javascript_percentile: req.body.javascript_percentile,
      data_structures_percentile: req.body.data_structures_percentile,
      num_of_votes: req.body.num_of_votes,
      device_type: req.body.device_type
    },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found with id " + req.params.username,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "User not found with id " + req.params.username,
        });
      }
      return res.status(500).send({
        message: "Error updating user with id " + req.params.username,
      });
    });
};

// Delete a user with the specified username in the request
exports.delete = (req, res) => {
  User.findOneAndRemove({username: req.params.username})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with id " + req.params.username
          });
      }
      res.send({message: "User deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "User not found with id " + req.params.username
          });                
      }
      return res.status(500).send({
          message: "Could not delete user with id " + req.params.username
      });
  });
};