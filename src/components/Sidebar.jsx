import React from "react";
import placeholderImg from "../../images/placeholder.png"

const user = {
  name: "Jane Doe",
  bio: "Mentor | Software Engineer | Passionate about helping young women in tech",
  photo: placeholderImg,
};

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white p-4 shadow-md">
      <img className="w-24 h-24 mx-auto rounded-full" src={user.photo} alt={user.name} />
      <h2 className="text-xl font-semibold text-center mt-2">{user.name}</h2>
      <p className="text-sm text-gray-600 text-center mt-1">{user.bio}</p>
    </div>
  );
}
