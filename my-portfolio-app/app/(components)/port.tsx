"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Anime, mains, Textanime } from "./Motion";
import Link from "next/link";

const Port = () => {
  return (
    <>
    <div id='portfolio' className="  "><br /><br /><br /></div>
      <motion.div  className="mb-[50px]">
        <motion.div>
          <h1 className="font-font min-[320px]:text-[50px] md:text-[70px] lg:text-[70px] text-center">
            My <span className="text-[#FC6B00]">PortFolio </span>{" "}
          </h1>
          <p className="text-center">Here are some of my previous Projects</p>
        </motion.div>
        <motion.div variants={mains} whileInView={'show'
        }  className="flex flex-wrap justify-around">

<motion.div variants={Anime} initial={'hidden'} whileInView={'show'}>
 
 <h3 className="font-font text-center min-[320px]:text-[40px] md:text-[50px] lg:text-50px]"><span className="text-[#FC6B00]">Panaverse</span>  Website</h3>
 <Link href={'https://panaverse-dao-ivory.vercel.app'}  target={"_blank"  }>
 
<Image className="mx-auto rounded-lg scale-[0.9] hover:scale-[1]  transition ease-in-out" src={'/Panaverse.png'} alt={'Panaverse Website Piaic'} width={500} height={500} />
 </Link>

</motion.div>

<motion.div variants={Anime} initial={'hidden'} whileInView={'show'}>
<h3 className="font-font text-center text-[50px]"><span className="text-[#FC6B00]">Metric</span> Website</h3>
<Image className="mx-auto rounded-lg scale-[0.9] hover:scale-[1]  transition ease-in-out" src={'/Metric.png'} alt={'Panaverse Website Piaic'} width={500} height={500} />


  
</motion.div>
<motion.div variants={Anime} whileInView={'show'} initial={'hidden'}>
<h3 className="font-font text-center text-[50px]"><span className="text-[#FC6B00]">Pricing</span> UI</h3>
<Link href={'https://pricing-ui-zainulabdeen-101.vercel.app'} target={"_blank"  }>
  <Image className="rounded-lg scale-[0.9] hover:scale-[1]  transition ease-in-out " src={'/pricing.png'}  width={500} height={500} alt={'pricing'}/>
</Link>
</motion.div>
<motion.div variants={Anime} initial={'hidden'} whileInView={'show'}>
 
 <h3 className="font-font text-center min-[320px]:text-[40px] md:text-[50px] lg:text-50px]"><span className="text-[#FC6B00]">Panaverse</span>  Website</h3>
 <Link href={''}  target={"_blank"  }>
 
<Image className="mx-auto rounded-lg scale-[0.9] hover:scale-[1]  transition ease-in-out" src={'/kfc2.png'} alt={'Panaverse Website Piaic'} width={500} height={500} />
 </Link>

</motion.div>
        </motion.div>
      </motion.div>
     
    </>
  );
};

export default Port;
