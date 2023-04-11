import React from "react";
import notFoundImg01 from "../assets/images/air-ballon-not-found-page-01.png";
import notFoundImg02 from "../assets/images/not-found-page-02.png";
import notFoundImg03 from "../assets/images/404-page-03.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div
        className="h-[400px] bg-green-800 bg-left-top bg-auto bg-repeat-x"
        style={{ backgroundImage: "url(./img/continuartl_4.png)" }}
      ></div>

      <div className="-mt-64 ">
        <div className="w-full text-center">
          <p className="text-sm tracking-widest text-white">Subtitle</p>
          <h1 className="font-bold text-5xl text-white">Title</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          <div className="p-2 sm:p-10 text-center cursor-pointer">
            <Link to={"404-page-01"}>
              <div className="p-0 h-80 max-w-sm  rounded overflow-hidden border border-gray-300 shadow-lg hover:bg-white transition duration-500  bg-white">
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
              <div className="p-0 h-80 max-w-sm  rounded overflow-hidden border border-gray-300 shadow-lg hover:bg-white transition duration-500  bg-white">
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
              <div className="p-0 h-80 max-w-sm  rounded overflow-hidden border border-gray-300 shadow-lg hover:bg-white transition duration-500  bg-white">
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
