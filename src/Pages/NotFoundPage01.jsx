import React from "react";
import notFoundImg from "../assets/images/air-ballon-error-page.svg";

export const NotFoundPage01 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img className="md:w-2/5" src={notFoundImg} alt="" />
      <div className="flex flex-col items-center justify-center">
        {/* <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 mt-12">
          Page Not Found
        </p> */}
        <p className="md:text-sm lg:text-md text-gray-600 mt-4 px-2 md:px-0 text-center">
          Uh Oh! Page not found!
        </p>
        <a
          href=""
          className="flex items-center space-x-2 bg-[#142833]  hover:bg-[#19323f] text-gray-100 px-4 py-2 mt-10 rounded-full transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="font-sans">Return Home</span>
        </a>
      </div>
    </div>
  );
};
