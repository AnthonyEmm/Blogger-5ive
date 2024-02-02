import { errorHandler } from "../utils/error.js";
import Comment from "../model/comment.model.js";

export const createComment = async (req, res, next) => {
  try {
    const { content, blogId, userId } = req.body;
    if (userId !== req.user.id) {
      return next(errorHandler(403, "Unauthorized"));
    }

    const newComment = await Comment({
      content,
      blogId,
      userId,
    });

    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};
