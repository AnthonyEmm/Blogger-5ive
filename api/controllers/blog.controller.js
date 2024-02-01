import Blog from "../model/blog.model.js";
import { errorHandler } from "../utils/error.js";

export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(
      errorHandler(403, "You are not authorized to create a blog post"),
    );
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newBlog = new Blog({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    next(error);
  }
};

export const getblogs = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    const blogs = await Blog.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { userId: req.query.slug }),
      ...(req.query.blogId && { _Id: req.query.blogId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: "i" } },
          { content: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate(),
    );

    const lastMonthBlogs = await Blog.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      blogs,
      totalBlogs,
      lastMonthBlogs,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteblog = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(
      errorHandler(400, "You are not authorized to delete this blog"),
    );
  }
  try {
    await Blog.findByIdAndDelete(req.params.blogId);
    res.status(200).json("Blog deleted successfully");
  } catch (error) {
    next(error);
  }
};
