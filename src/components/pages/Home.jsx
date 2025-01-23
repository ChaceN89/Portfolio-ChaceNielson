import React from "react";
import { Link } from "react-router-dom";
import { skillParam, projectParam } from "../../data/globals";

export default function HomePage() {
  return (
    <div className="space-y-5 flex flex-col items-center justify-center">
      <h1>Home Page</h1>

      {/* Link for Project Modal */}
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to={`?${projectParam}=capstone`}
      >
        Open Capstone Project Modal
      </Link>
      <br />

      <div className="border border-yellow-600 h-72">hhhhhahahha</div>
      <div className="border border-yellow-600 h-72">hhhhhahahha</div>
      <div className="border border-yellow-600 h-72">hhhhhahahha</div>
      <div className="border border-yellow-600 h-72">hhhhhahahha</div>

      {/* Link for Specialization Modal */}
      <Link
        className="hover:bg-red-600 hover:text-white p-4 rounded-md bg-blue-300"
        to={`?${skillParam}=frontend`}
      >
        Open Frontend Skills Modal
      </Link>
    </div>
  );
}
