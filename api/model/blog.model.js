import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://wordtracker-swoop-uploads.s3.amazonaws.com/uploads/ckeditor/pictures/1247/content_wordtracker_blog_article_image.jpg",
    },
    category: {
      type: String,
      default: "uncategorized",
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
