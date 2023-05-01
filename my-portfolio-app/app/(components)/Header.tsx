"use client";
import React from "react";
import { useState } from "react";

import { AiOutlineMenu,AiOutlineClose,AiOutlineGithub, AiFillLinkedin, AiFillFacebook, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
const Headers = () => {
  const [display,setDisplay]=useState(false)
  const  Handlenav = ()=>{
    setDisplay(!display)
  }
 
  const navLinks = ["ABOUT", "PORTFOLIO", "SERVICES","SKILLS"];
  const ContactClicknav = () => {
    document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: "smooth" })
}
const Topnav = () => {

      window.scrollTo({top:0 ,left:0,behavior:"smooth"})
     
}


  const RenderNavlink = (content: string) => {
    const scrolltold = `${content.toLowerCase()}`;
    const handleClicknav = () => {
      document
        .getElementById(scrolltold)
        ?.scrollIntoView({ behavior: "smooth" });
    };

   
    return (
      <ul
        className=" mt-[10px] min-[320px]:hidden max-[768px]:hidden lg:flex"
        key={content}
      >
        <li  className=" p-[20px]">
          <button onClick={handleClicknav}>

          {content}
          </button>
        </li>
      </ul>
    );
  };
  return (
    <>
      <div className="flex justify-between z-[10] fixed top-0 left-0 w-[100%]  ">
        <div onClick={Topnav} className='cursor-pointer'>
        <Image className="min-[320px]:hidden  md:block"  alt="ANIMe" src={"/3.png"} width={80} height={80} />
        </div>
        <div id='navContainer' className="active">
          {navLinks.map((nav) => RenderNavlink(nav))}
        </div>
        <div>
          <button onClick={ContactClicknav} className="lg:  mt-[10px] min-[320px]:hidden max-[768px]:hidden   lg:flex hover:bg-[#ed6400]  bg-[#FC6B00] ease-in duration-200 rounded-lg  p-[10px]  lg:ml-[200px]  text-md">
            Contact Me
          </button>
        </div>
       
        <div onClick={Handlenav}>
          <AiOutlineMenu size={'30px'} className="lg:hidden mt-2 mr-2  mx-auto" />
        </div>
      </div>

      <div className={display ? "w-[75%] h-screen z-20 fixed  top-0 left-0 bg-gray-900/90 ease-in-out   duration-150 ":'left-[-100%] ease-in-out duration-150'} >
<div className={display ? "flex justify-between ease-in-out  delay-150 duration-150":'hidden '}>

      <Image className=""  alt="ANIMe" src={"/3.png"} width={80} height={80} />
  

      <AiOutlineClose onClick={Handlenav} className="mt-[20px] mr-2  shadow-md rounded-full shadow-gray-600  cursor-pointer "  size={'30px'} />
      

</div>
      <div className={display ? "flex justify-between ease-in-out md:text-lg delay-150 duration-150":'hidden'}>

      <Typewriter
  options={{
    strings: ['Code Your Dreams','We make websites faster', 'Better people , better websites'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>

<div className={display ?"block":'hidden'}>
  <ul className="p-3 flex-col  mt-[20px]">
  
  <li  className="py-4 text-sm md:text-lg">ABOUT</li>
 
  <li className="py-4 text-sm md:text-lg">PORTFOLIO</li>
  <li className="py-4 text-sm md:text-lg">SERVICES</li>
  <li className="py-4 text-sm md:text-lg">SKILLS</li></ul>
  <p className="text-[#FC6B00] tracking-widest">LETS CONNECT</p>
 <div className="flex min-[320px]:justify-between md:justify-around mt-3"><AiOutlineGithub  size={25}/>
 <AiFillLinkedin size={25} />
 <AiFillFacebook size={25} />
 <AiFillYoutube size={25} />
 </div>
 <div className="text-sm md:text-lg align-bottom mt-[70px]">
  <p className="" >© 2023 <span className="text-[#FC6B00] font-bold">Anime Pros™</span> . All Rights Reserved.</p>
 </div>
</div>


        
</div>
<div className={display ? "fixed top-0 left-0 h-screen w-full bg-black/70":''}>
</div>
    </>
  );
};

export default Headers;
