import React from "react";

export default function Post({ author, content }) {
  return (
    <div className="mb-4 p-4 bg-white shadow-md rounded-xl">
      <h3 className="font-semibold">{author}</h3>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
}
