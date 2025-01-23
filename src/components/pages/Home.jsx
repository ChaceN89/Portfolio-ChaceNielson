
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center">
      <h1>Home Page</h1>
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to="?project=capstone"
      >
        Open Capstone Project Modal
      </Link>
      <br />
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to="?skill=frontend"
      >
        Open Frontend Skills Modal
      </Link>
    </div>
  );
}

