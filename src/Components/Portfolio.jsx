import React from "react";
import { asset } from "../assets/Assets";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      name: asset.nodeJsImage,
    },
    {
      id: 2,
      name: asset.nextJsImage,
    },
    {
      id: 3,
      name: asset.reactImage,
    },
    {
      id: 4,
      name: asset.tailwinsCssImage,
    },
    {
      id: 5,
      name: asset.HtmlImage,
    },
    {
      id: 6,
      name: asset.GitHubImage,
    },
    {
      id: 7,
      name: asset.nextJsLogo,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400 ">
            portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3   gap-8 px-4 sm:px-0 ">
          {portfolio.map(({ id, name }) => (
            <div key={id} className="shadow-md shadow-gray-600  rounded-lg">
              <img
                src={name}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  {" "}
                  react
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  {" "}
                  Demon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
