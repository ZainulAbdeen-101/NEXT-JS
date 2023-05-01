"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Anime, mains, Textanime } from './Motion'
const About = () => {
  return (
    <>
    <div id='about' className="  "><br /><br /><br /></div>

      <motion.div variants={mains} whileInView={"show"}  className="mt-[100px ]">
        <motion.div variants={Anime} initial={"hidden"} whileInView={"show"}>
          <h1 className="font-font text-center min-[320px]:text-[60px] md:text-[70px] lg:text-[70px] ">
            About <span className="text-[#FC6B00]">Me</span>{" "}
          </h1>

          <motion.div className=" lg:flex">
            <motion.div
              variants={Anime}
              initial={"hidden"}
              whileInView={"show"}
              className=" min-[320px]:text-justify md:max-w-[550px] lg:max-w-[550px] mx-auto min-[320px]:mt-[20px]   md:mt-[50px] lg:mt-[80px] min-[320px]:text-[13px]   md:text-[13px] lg:text-[16px]
              min-[320px]:p-3   md:p-2 lg:p-0"
            >
              <motion.p className="">
                Hello! My name is{" "}
                <span className="text-[#FC6B00] font-bold">
                  Mohammad Taj ul Islam Khan{" "}
                </span>{" "}
                and I enjoy creating things that live on the internet. My
                interest in web development started in 2020 when I decided to
                try make a simple website — turns out making a simple webpage
                taught me a lot about HTML & CSS!
              </motion.p>
              <motion.p>
                Fast forward to today im learning new emerging technologies i
                currently learning to make websites according to JamStack
                Standard{" "}
              </motion.p>
              <motion.p>Some Of The SkillSets I Know :</motion.p>
              <motion.div className="max-w-[550px] flex flex-wrap gap-2 justify-between">
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Html
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  CSS
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Bootstrap
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  J Query
                </motion.button>

                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Javascript
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Typescript
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Chakra ui
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Tailwind CSS
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  React
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  Next Js
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  PhP{" "}
                </motion.button>
                <motion.button className="border-solid border-2 rounded p-2 border-[#FC6B00]">
                  My SQl
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className='min-[320px]:mt-[20px]'>
              <Image
                className="md:mx-auto"
                src={"/mainx.png"}
                alt="main"
                height={250}
                width={580}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
