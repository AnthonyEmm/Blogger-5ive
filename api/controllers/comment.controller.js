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

export const getBlogComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({
      blogId: req.params.blogId,
    }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {
      return next(errorHandler(404, "Comment not found"));
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }

    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    next(error);
  }
};
