import React from "react";

const Avatar = ({ src, alt, size = "40px" }) => {
  return (
    <img
      src={src || "https://via.placeholder.com/40"}
      alt={alt || "User Avatar"}
      className="rounded-full border"
      width={size}
      height={size}
    />
  );
};

export { Avatar };
