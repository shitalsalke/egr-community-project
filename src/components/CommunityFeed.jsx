import React from "react";
import Sidebar from "./Sidebar"; // Local Sidebar Component
import Post from "./Post"; // Local Post Component
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const user = {
  name: "Jane Doe",
  bio: "Mentor | Software Engineer | Passionate about helping young women in tech",
  photo: "https://via.placeholder.com/100",
};

const posts = [
  {
    id: 1,
    author: "Emily Johnson",
    content: "Excited to start my mentorship journey! Looking forward to learning and growing together.",
  },
  {
    id: 2,
    author: "Sarah Thompson",
    content: "Had an amazing session today with my mentor! Learned so much about career planning.",
  },
];

export default function CommunityFeed() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-md">
        <Avatar className="w-24 h-24 mx-auto rounded-full" src={user.photo} alt={user.name} />
        <h2 className="text-xl font-semibold text-center mt-2">{user.name}</h2>
        <p className="text-sm text-gray-600 text-center mt-1">{user.bio}</p>
      </div>

      {/* Main Feed */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full p-4">
          {posts.map((post) => (
            <Card key={post.id} className="mb-4 p-4 bg-white shadow-md rounded-xl">
              <CardContent>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-gray-700 mt-2">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
