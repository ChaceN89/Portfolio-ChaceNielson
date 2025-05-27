/**
 * @file ProjectsImages.jsx
 * @module dev/tools
 * @description
 *   Utility component for visually testing and comparing Blurhash previews against original project images.
 *   Iterates through all projects, displaying the thumbnail and gallery images side by side with their Blurhash values.
 *   Helps verify Blurhash quality and alignment by rendering both versions at a fixed size in a consistent layout.
 *
 * @author Chace Nielson
 * @created May 27, 2025
 * @updated May 27, 2025
 */

import React from "react";
import { projects } from "@/data/pageData/projectData";
import { Blurhash } from "react-blurhash";

export default function ProjectsImages() {
  return (
    <div className="space-y-10 p-4">
      {projects.map((project) => (
        <div key={project.id} className="border-b pb-10">
          <h2 className="text-xl font-semibold mb-4">{project.name}</h2>

          {/* Highlight (thumbnail) */}
          <div className="mb-6">
            <p className="text-sm mb-2 font-medium">Thumbnail</p>
            <div className="flex gap-4 items-center border p-2 rounded">
              <div className="flex flex-col items-center">
                <img
                  src={`/projects/${project.id}/${project.thumbnail.src}`}
                  alt="Original"
                  className="w-[200px] h-[120px] object-cover rounded border"
                />
                <p className="text-xs text-gray-450 mt-1">Original</p>
              </div>
              <div className="flex flex-col items-center">
                <Blurhash
                  hash={project.thumbnail.blurhash}
                  width={200}
                  height={120}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                />
                <p className="text-xs text-gray-450 mt-1">Blurhash</p>
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-450">File: {project.thumbnail.src}</p>
                <p className="text-xs text-gray-450">Blurhash: <code>{project.thumbnail.blurhash}</code></p>
              </div>
            </div>
          </div>

          {/* Other images */}
          {project.images?.length > 0 && (
            <>
              <p className="text-sm mb-2 font-medium">Gallery Images</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.images.map((img, idx) => (
                  <div key={idx} className="border rounded p-2 flex flex-col items-center gap-2">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <img
                          src={`/projects/${project.id}/${img.src}`}
                          alt="Original"
                          className="w-[200px] h-[120px] object-cover rounded border"
                        />
                        <p className="text-xs text-gray-450 mt-1">Original</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Blurhash
                          hash={img.blurhash}
                          width={200}
                          height={120}
                          resolutionX={32}
                          resolutionY={32}
                          punch={1}
                        />
                        <p className="text-xs text-gray-450 mt-1">Blurhash</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-450">File: {img.src}</p>
                      <p className="text-xs text-gray-450">Blurhash: <code>{img.blurhash}</code></p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
