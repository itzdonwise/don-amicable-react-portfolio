import React from "react";
import { asset } from "../assets/Assets";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: asset.HtmlLogo,
      title: " Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: asset.CssLogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: asset.JsLogo,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: asset.reactLogo,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: asset.nextJsLogo,
      title: "NextJs",
      style: "shadow-gray-200",
    },
    {
      id: 6,
      src: asset.tailwinsCssLogo,
      title: "Taiwind",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: asset.nodeJsImage,
      title: "nodeJs",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: asset.GitHubLogo,
      title: "GitHub",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-700 w-full h-full text-white"
    >
      <div className="max-w-screen-lg  flex flex-col justify-center mx-auto p-4 w-full h-full">
        <div>
          <div>
            <p className="text-4xl font-bold  inline border-b-4 border-gray-500">
              Experience
            </p>
            <p className="text-xl py-6">Check out some of work here</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {experience.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={
                  `shadow-lg hover:scale-105 duration-500 py-2 rounded-l ${style} `}
              >
                <img src={src} alt="" className="mx-auto w-20" />
                <p className="font-bold text-xl pt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
