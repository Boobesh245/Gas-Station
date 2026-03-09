const User = require('../modules/userModel');

// Get all users
exports.getDetails = async (req, res, next) => {
  try {

    const users = await User.find();

    res.json({
      success: true,
      count: users.length,
      users: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching users"
    });

  }
};


// Get user by ID
exports.getidDetails = async (req, res, next) => {
  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      user: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Error fetching user"
    });

  }
};