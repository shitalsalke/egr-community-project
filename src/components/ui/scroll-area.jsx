import React from "react";

const ScrollArea = ({ children, className, height = "300px" }) => {
  return (
    <div
      className={`overflow-y-auto ${className}`}
      style={{ maxHeight: height }}
    >
      {children}
    </div>
  );
};

export { ScrollArea };
