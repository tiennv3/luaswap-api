module.exports = mongoose => {
    const UserList = mongoose.model(
      "userList",
      mongoose.Schema(
        {
            user: String,
            loginTime: String
        },
        { timestamps: true }
      )
    );
  
    return UserList;
  };