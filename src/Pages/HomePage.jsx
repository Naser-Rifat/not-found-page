import React from "react";
import notFoundImg01 from "../assets/images/air-ballon-not-found-page-01.png";
import notFoundImg02 from "../assets/images/not-found-page-02.png";
import notFoundImg03 from "../assets/images/404-page-03.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="h-[400px] bg-gray-800 bg-left-top bg-auto bg-repeat-x"></div>

      <div className="-mt-64 ">
        <div className="w-full text-center">
          <h1 className="font-bold text-5xl text-white">
            B Code - 404 Error pages
          </h1>
          <p className="text-md tracking-widest text-white mt-3 font-sans">
            Experience the power of professional website pages with B-code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <Link to={"404-page-01"}>
              <div className="p-0 h-80 max-w-sm  rounded  overflow-hidden border border-gray-300 shadow-lg hover:bg-white hover:scale-105 transition duration-500  bg-white">
                <img
                  className="block w-full h-full object-cover"
                  src={notFoundImg01}
                />
              </div>
              <h2 className="text-center mt-2">Page - 01</h2>
            </Link>
          </div>
          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <Link to={"404-page-03"}>
              <div className="p-0 h-80 max-w-sm  rounded  hover:scale-105 overflow-hidden border border-gray-300 shadow-lg hover:bg-white transition duration-500  bg-white">
                <img
                  className="block w-full h-full object-cover"
                  src={notFoundImg03}
                />
              </div>
              <h2 className="text-center mt-2">Page - 02</h2>
            </Link>
          </div>
          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <Link to={"404-page-02"}>
              <div className="p-0 h-80 max-w-sm  rounded overflow-hidden border  hover:scale-105 border-gray-300 shadow-lg hover:bg-white transition duration-500  bg-white">
                <img
                  className="block w-full h-full object-cover"
                  src={notFoundImg02}
                />
              </div>
            </Link>
            <h2 className="text-center mt-2">Page - 03</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
