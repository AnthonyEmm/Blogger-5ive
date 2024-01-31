import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a blog</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            id="title"
            required
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="beauty">Beauty</option>
            <option value="finance">Fashion</option>
            <option value="finance">Finance</option>
            <option value="health">Health</option>
            <option value="politics">Politics</option>
            <option value="sports">Sports & Fitness</option>
            <option value="technology">Technology</option>
            <option value="travel">Travel & Vacation</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-gray-800 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button type="button" gradientDuoTone="purpleToBlue" size="sm">
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreateBlog;
