"use client";
import React from "react";
import { motion } from "framer-motion";
import { Anime, mains, Textanime } from "./Motion";
const Services = () => {
  return (
    <>
      <div id="services">
        <br />
        <br />
        <br />
      </div>
      <motion.div variants={mains} whileInView={"show"} initial={"hidden"}>
        <motion.div
          variants={Textanime}
          initial={"hidden"}
          whileInView={"show"}
          className=""
        >
          <h1 className="font-font  text-[#FC6B00] text-center min-[320px]:text-[60px] md:text-[70px] lg:text-[70px]">
            SERVICES
          </h1>
        </motion.div>
        <motion.div
          variants={mains}
          whileInView={"show"}
          initial={"hidden"}
          className="flex min-[320px]:flex-col min-[320px]:justify-around   md:items-center   lg:flex-row  mt-[50px] mb-[100px]"
        >
          <motion.div
            variants={Anime}
            whileInView={"show"}
            initial={"hidden"}
            className="min-[320px]:max-w-[380px] min-[1440px]:max-w-[380px]  rounded-lg h-[200px] bg-[#36454f]/30 border-2 border-[#FFFFFF] ease-in-out duration-75 min-[320px]:m-3  lg:hover:border-[#FC6B00] lg:hover:mt-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FC6B00 "
              className="w-16 h-16 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                clipRule="evenodd"
              />
              <></>
            </svg>
            <h2 className="font-font text-[#FC6B00] text-[20px]  text-center">
              WEB DEVLOPMENT
            </h2>
            <p className="text-center text-sm">
              I Develop Websites.I Create High Performance Websites With Blazing
              Fast Speed.
            </p>
          </motion.div>
          <motion.div
            variants={Anime}
            whileInView={"show"}
            initial={"hidden"}
            className="max-w-[380px] h-[200px] rounded-lg min-[1200px]:mt-10  bg-[#36454f]/30 min-[320px]:m-3 border-2 border-[#FFFFFF] ease-in-out duration-75  lg:hover:border-[#FC6B00]   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FC6B00"
              className="w-16 h-16 mx-auto"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>

            <h2 className="font-font text-[#FC6B00] text-[20px] text-center">
              WEB DESIGN
            </h2>
            <p className="text-sm text-center">
              I Develop Websites.I Create High Performance Websites With Blazing
              Fast Speed.
            </p>
          </motion.div>
          <motion.div
            variants={Anime}
            whileInView={"show"}
            initial={"hidden"}
            className="max-w-[380px] h-[200px] max: rounded-lg  duration-75 bg-[#36454f]/30 border-2 min-[320px]:m-3 border-[#FFFFFF] ease-in-out  lg:hover:border-[#FC6B00] lg:hover:mt-10 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FC6B00"
              className="w-16 h-16 mx-auto "
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>

            <h2 className="font-font text-[#FC6B00] text-[20px]  text-center">
              VIDEO EDITING
            </h2>
            <p className="text-sm text-center">
              I Develop Websites.I Create High Performance Websites With Blazing
              Fast Speed.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
