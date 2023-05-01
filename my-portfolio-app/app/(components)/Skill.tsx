"use client";
import Typewriter from "typewriter-effect";
import React from "react";
import { motion } from "framer-motion";
import { Anime, mains, Textanime } from "./Motion";
import Image from "next/image";
import { DEFAULT_MIN_VERSION } from "tls";

const Skills = () => {
  return (
    <>
      <div id="skills"><br /><br /><br /></div>

      <motion.div variants={mains} whileInView={"show"} initial={"hidden"} className={'mb-[60px]'}>
        <motion.div
          variants={Textanime}
          initial={"hidden"}
          whileInView={"show"}
        >
          <h1 className="text-[#FC6B00] font-font text-[70px] text-center">
            Skills
          </h1>
<div className="text-center">
            <Typewriter
              options={{
                strings: ["I Am Improving My Self In Following Set Of Skills"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={mains}
          whileInView={"show"}
          initial={"hidden"}
          className="place-items-center  grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/html.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">HTML</span>
          <span className="text-sm font-medium text-white ">95%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[95%]"></div>
         
        </motion.div>
          
          </motion.div>
          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/css.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">CSS</span>
          <span className="text-sm font-medium text-white ">75%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[75%]"></div>
         
        </motion.div>
          </motion.div>

          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/js.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">JS</span>
          <span className="text-sm font-medium text-white ">80%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[80%]"></div>
         
        </motion.div>
          </motion.div>
          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/boot.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">BTStrap</span>
          <span className="text-sm font-medium text-white ">95%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[95%]"></div>
         
        </motion.div>
          </motion.div>

          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/jquery.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">JQuery</span>
          <span className="text-sm font-medium text-white ">70%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[70%]"></div>
         
        </motion.div>
          </motion.div>

          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/php.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">PhP</span>
          <span className="text-sm font-medium text-white ">60%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[60%]"></div>
         
        </motion.div>
          </motion.div>
          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/react.png"} height={80} width={80} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">React</span>
          <span className="text-sm font-medium text-white ">65%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[65%]"></div>
         
        </motion.div>
          </motion.div>

          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/ts.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">TS</span>
          <span className="text-sm font-medium text-white ">75%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[75%]"></div>
         
        </motion.div>
          </motion.div>
          <motion.div variants={Anime} whileInView={"show"} initial={"hidden"}>
            <Image alt="html" src={"/tail.png"} height={100} width={100} />
            <motion.div className="flex justify-between mb-1">
          <span className="text-base font-medium text-white ">Tailwind </span>
          <span className="text-sm font-medium text-white ">90%</span>
        </motion.div>
        <motion.div variants={Textanime} whileInView={'show'} initial={'hidden'} className="w-full bg-white rounded-full h-2.5 ">
         
            <div className="bg-[#FC6B00] h-2.5 rounded-full w-[90%]"></div>
         
        </motion.div>
          </motion.div>
        </motion.div>

       
      </motion.div>

   
    </>
  );
};

export default Skills;
