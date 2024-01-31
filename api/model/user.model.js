import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: "string", required: true, unique: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    profilePicture: {
      type: "string",
      default:
        "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
